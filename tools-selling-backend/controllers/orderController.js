const Order = require("../models/Order");
const OrderAddressController = require("./orderAddressController");
const serverError = require("../utils/serverError");
const orderValidation = require("../validations/orderValidation");

const orderPlace = async (req, res) => {
  const {
    name,
    email,
    phone,
    city,
    country,
    streetAddress,
    additionalInformation,
    tools,
  } = req.body;
  const address = {
    name,
    email,
    phone,
    city,
    country,
    streetAddress,
    additionalInformation,
    tools,
  };
  const validation = orderValidation(address);
  if (validation.isValid) {
    OrderAddressController(res, address, function (orderAddRes) {
      const toolsId = [];
      tools.map((tool) => {
        toolsId.push(tool._id.toString());
      });
      const order = {
        orderAddress: orderAddRes._id,
        tools: toolsId,
      };
      new Order(order)
        .save()
        .then((response) => {
          res.status(200).json({
            response,
            message: "We have received your order! We will contact soon. Thank you!",
          });
        })
        .catch(() => {
          serverError(res);
        });
    });
  } else {
    res.status(400).json(validation.error);
  }
};

const getOders = (req, res) => {
  if (process.env.ADMIN_USER === req.user.email) {
    Order.find()
      .populate({
        path: "tools",
        populate: {
          path: "category",
        },
      })
      .populate("orderAddress")
      .then((response) => {
        res.status(200).json(response);
      })
      .catch(() => {
        serverError(res);
      });
  }
};

const updateOrder = (req, res) => {
  if (process.env.ADMIN_USER === req.user.email) {
    Order.findOneAndUpdate(
      { _id: req.params.id },
      { status: req.body.status },
      { new: true }
    )
      .populate({
        path: "tools",
        populate: {
          path: "category",
        },
      })
      .populate("orderAddress")
      .then((response) => {
        res.status(200).json({
          response,
          message: "Order updated successfully",
        });
      })
      .catch(() => {
        serverError(res);
      });
  }
};

const deleteOrder = (req, res) => {
  if (process.env.ADMIN_USER === req.user.email) {
    Order.findOneAndDelete({ _id: req.params.id })
      .then((response) => {
        res.status(200).json({
          response,
          message: "Order deleted successfully",
        });
      })
      .catch(() => {
        serverError(res);
      });
  }
};

const getMyOrders = (req, res) => {
  Order.find({ author: req.user._id })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = {
  orderPlace,
  getOders,
  updateOrder,
  deleteOrder,
  getMyOrders,
};

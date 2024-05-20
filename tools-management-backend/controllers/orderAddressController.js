const OrderAddress = require("../models/OrderAddress");
const serverError = require("../utils/serverError");

const OrderAddressController = (res, address, cb) => {
  new OrderAddress(address)
    .save()
    .then((response) => {
      cb(response);
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = OrderAddressController;

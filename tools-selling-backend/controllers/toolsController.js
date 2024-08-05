const Tool = require("../models/Tools");
const serverError = require("../utils/serverError");
const cloudinary = require("cloudinary");
const toolValidation = require("../validations/toolValidation");

const addTool = (req, res) => {
  if (process.env.ADMIN_USER === req.user.email) {
    const { categoryId, name, description, price } = req.body;
    const validation = toolValidation({
      categoryId,
      name,
      description,
      price,
      image: req.file,
    });
    if (validation.isValid) {
      cloudinary.v2.uploader.upload(
        req.file.path,
        {
          public_id: "tools-management/tools/" + req.file.filename,
        },
        function (err, result) {
          if (err) {
            serverError(res);
          } else if (result) {
            const toolObj = {
              category: categoryId,
              name,
              slug: name.toLowerCase().split(" ").join("-"),
              description,
              price,
              image: result,
            };
            new Tool(toolObj)
              .save()
              .then((savedTool) => {
                return Tool.findOne(savedTool._id).populate("category").exec();
              })
              .then((populatedTool) => {
                res.status(200).json({
                  message: "Tool added successfully",
                  response: populatedTool,
                });
              })
              .catch(() => {
                serverError(res);
              });
          }
        }
      );
    } else {
      res.status(400).json(validation.error);
    }
  }
};

const getTools = (req, res) => {
  Tool.find()
    .populate("category")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const getCategoryTools = (req, res) => {
  Tool.find({ category: req.params.id })
    .populate("category")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const getSignleTools = (req, res) => {
  Tool.findOne({ slug: req.params.slug })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const commonUpdateToolFunc = (res, id, toolObj) => {
  Tool.findOneAndUpdate({ _id: id }, toolObj, {
    new: true,
  })
    .populate("category")
    .then((populatedTool) => {
      res.status(200).json({
        message: "Tool updated successfully",
        response: populatedTool,
      });
    })
    .catch(() => {
      serverError(res);
    });
};

const updateTool = (req, res) => {
  if (process.env.ADMIN_USER === req.user.email) {
    const { categoryId, name, description, price } = req.body;
    const { id, toolImageId } = req.params;
    const validation = toolValidation({
      categoryId,
      name,
      description,
      price,
      image: req.file || req.body.imageUrl,
    });
    if (validation.isValid) {
      if (req.file) {
        cloudinary.v2.uploader.upload(
          req.file.path,
          {
            public_id: "tools-management/tools/" + req.file.filename,
          },
          function (err, result) {
            if (err) {
              serverError(res);
            } else if (result) {
              const toolObj = {
                category: categoryId,
                name,
                slug: name.toLowerCase().split(" ").join("-"),
                description,
                price,
                image: result,
              };
              commonUpdateToolFunc(res, id, toolObj);
            }
          }
        );
        cloudinary.v2.uploader.destroy(toolImageId);
      } else {
        const toolObj = {
          category: categoryId,
          name,
          slug: name.toLowerCase().split(" ").join("-"),
          description,
          price,
        };
        commonUpdateToolFunc(res, id, toolObj);
      }
    } else {
      res.status(400).json(validation.error);
    }
  }
};

const deleteTool = (req, res) => {
  const { id, toolImageId } = req.params;
  if (process.env.ADMIN_USER === req.user.email) {
    Tool.findOneAndDelete({ _id: id })
      .then((response) => {
        res.status(200).json({
          response,
          message: "Tool deleted successfully",
        });
      })
      .catch(() => {
        serverError(res);
      });
    cloudinary.v2.uploader.destroy(toolImageId);
  }
};

module.exports = {
  addTool,
  getTools,
  getSignleTools,
  getCategoryTools,
  updateTool,
  deleteTool,
};

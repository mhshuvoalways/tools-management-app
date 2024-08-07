const Category = require("../models/Category");
const Tools = require("../models/Tools");
const serverError = require("../utils/serverError");
const cloudinary = require("cloudinary");
const categoryValidation = require("../validations/categoryValidation");

const createCategory = (req, res) => {
  if (process.env.ADMIN_USER === req.user.email) {
    const { name } = req.body;
    const validation = categoryValidation({
      name: name,
      image: req.file,
    });
    if (validation.isValid) {
      Category.findOne({ url: name.toLowerCase().split(" ").join("-") })
        .then((isRes) => {
          if (!isRes) {
            cloudinary.v2.uploader.upload(
              req.file.path,
              {
                public_id: "tools-management/categories/" + req.file.filename,
              },
              function (err, result) {
                if (err) {
                  serverError(res);
                } else if (result) {
                  const categoryObj = {
                    name: name,
                    url: name.toLowerCase().split(" ").join("-"),
                    image: result,
                  };
                  new Category(categoryObj)
                    .save()
                    .then((response) => {
                      res.status(200).json({
                        message: "Category added successfully",
                        response,
                      });
                    })
                    .catch(() => {
                      serverError(res);
                    });
                }
              }
            );
          } else {
            res.status(400).json({
              message: "Category already exist!",
              response,
            });
          }
        })
        .catch(() => {
          serverError(res);
        });
    } else {
      res.status(400).json(validation.error);
    }
  }
};

const getCategory = (req, res) => {
  Category.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const getSingleCategory = (req, res) => {
  Category.findOne({ url: req.params.url })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const commonUpdateCategoryFunc = (res, id, categoryObj) => {
  Category.findOneAndUpdate({ _id: id }, categoryObj, { new: true })
    .then((response) => {
      res.status(200).json({
        message: "Category updated successfully",
        response,
      });
    })
    .catch(() => {
      serverError(res);
    });
};

const updateCategory = (req, res) => {
  if (process.env.ADMIN_USER === req.user.email) {
    const { name } = req.body;
    const { id, categoryImageId } = req.params;
    const validation = categoryValidation({
      name: name,
      image: req.file || req.body.imageUrl,
    });
    if (validation.isValid) {
      const newUrl = name.toLowerCase().split(" ").join("-");
      Category.findOne({ url: newUrl })
        .then((existingCategory) => {
          if (existingCategory && existingCategory._id.toString() !== id) {
            res.status(400).json({
              message: "Category already exists!",
            });
          } else {
            if (req.file) {
              cloudinary.v2.uploader.upload(
                req.file.path,
                {
                  public_id: "tools-management/categories/" + req.file.filename,
                },
                function (err, result) {
                  if (err) {
                    serverError(res);
                  } else if (result) {
                    const categoryObj = {
                      name,
                      url: newUrl,
                      image: result,
                    };
                    commonUpdateCategoryFunc(res, id, categoryObj);
                  }
                }
              );
              cloudinary.v2.uploader.destroy(categoryImageId);
            } else {
              const categoryObj = {
                name,
                url: newUrl,
              };
              commonUpdateCategoryFunc(res, id, categoryObj);
            }
          }
        })
        .catch(() => {
          serverError(res);
        });
    } else {
      res.status(400).json(validation.error);
    }
  }
};


const deleteCategory = (req, res) => {
  const { id, categoryImageId } = req.params;
  if (process.env.ADMIN_USER === req.user.email) {
    Category.findOneAndDelete({ _id: id })
      .then((response) => {
        res.status(200).json({
          response,
          message: "Category deleted successfully",
        });
      })
      .catch(() => {
        serverError(res);
      });
    cloudinary.v2.uploader.destroy(categoryImageId);
    Tools.find({ category: id })
      .then((toolResponse) => {
        Tools.deleteMany({ category: id }).exec();
        toolResponse.forEach((el) => {
          cloudinary.v2.uploader.destroy(el.image.public_id);
        });
      })
      .catch(() => {
        serverError(res);
      });
  }
};

module.exports = {
  createCategory,
  getCategory,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};

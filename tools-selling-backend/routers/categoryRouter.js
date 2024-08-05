const router = require("express").Router();
const {
  createCategory,
  getCategory,
  getSingleCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const authenticate = require("../middlewares/authenticate");
const fileUploader = require("../middlewares/fileUploader");

router.post(
  "/category/createCategory",
  authenticate,
  fileUploader.single("image"),
  createCategory
);
router.get("/category/getCategory", getCategory);
router.get("/category/getSingleCategory/:url", getSingleCategory);
router.put(
  "/category/updateCategory/:id/:categoryImageId",
  authenticate,
  fileUploader.single("image"),
  updateCategory
);
router.delete(
  "/category/deleteCategory/:id/:categoryImageId",
  authenticate,
  deleteCategory
);

module.exports = router;

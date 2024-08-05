const router = require("express").Router();
const {
  addTool,
  getTools,
  getCategoryTools,
  getSignleTools,
  updateTool,
  deleteTool,
} = require("../controllers/toolsController");
const authenticate = require("../middlewares/authenticate");
const fileUploader = require("../middlewares/fileUploader");

router.post(
  "/tool/addTool",
  authenticate,
  fileUploader.single("image"),
  addTool
);
router.get("/tool/getTools", getTools);
router.get("/tool/getCategoryTools/:id", getCategoryTools);
router.get("/tool/getSingleTool/:slug", getSignleTools);
router.put(
  "/tool/updateTool/:id/:toolImageId",
  authenticate,
  fileUploader.single("image"),
  updateTool
);
router.delete("/tool/deleteTool/:id/:toolImageId", authenticate, deleteTool);

module.exports = router;

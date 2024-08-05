const router = require("express").Router();
const {
  adminLogin,
  userRegister,
  userLogin,
  getUser,
} = require("../controllers/userController");
const authenticate = require("../middlewares/authenticate");

router.post("/user/adminLogin", adminLogin);
router.post("/user/userRegister", userRegister);
router.post("/user/userLogin", userLogin);
router.get("/user/getUsers", authenticate, getUser);

module.exports = router;

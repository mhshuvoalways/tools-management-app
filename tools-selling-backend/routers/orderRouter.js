const router = require("express").Router();
const {
  orderPlace,
  getOrders,
  updateOrder,
  deleteOrder,
  getMyOrders,
} = require("../controllers/orderController");
const authenticate = require("../middlewares/authenticate");

router.post("/order/orderPlace", authenticate, orderPlace);
router.get("/order/getOrders", authenticate, getOrders);
router.get("/order/getMyOrders", authenticate, getMyOrders);
router.put("/order/updateOrder/:id", authenticate, updateOrder);
router.delete("/order/deleteOrder/:id", authenticate, deleteOrder);

module.exports = router;

var express = require("express");
const OrderController = require("../controller/OrderController");

var router = express.Router();

router.get("/", OrderController.index);
router.get("/isOpen", OrderController.getOrderOpen);
router.route("/:id").get(OrderController.show).delete(OrderController.destroy);
router.put("/pickup/:id", OrderController.pickUp);
router.put("/status/:id", OrderController.finishOrder);
router.post("/", OrderController.store);
router.post("/filter", OrderController.filterOrderBydate);
router.get("/byUserId/:id", OrderController.getOrderByUserId);
router.get("/cancelingOrder/:id", OrderController.cancelingOrder);

module.exports = router;

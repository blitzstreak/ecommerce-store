const express = require("express");
const router = express.Router();
const { 
    getAllOrders, 
    getOrderById 
} = require("./db");

router.get("/", async (req, res, next) => {
  try {
    res.send(await getAllOrders());
  } catch (err) {
    next(err);
  }
});
router.get("/:id", async (req, res, next) => {
    try {
      res.send(await getOrderById(req.params.id));
    } catch (err) {
      next(err);
    }
});

module.exports = router;
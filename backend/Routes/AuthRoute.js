const { Signup, Login } = require("../Controllers/AuthController");
const router = require("express").Router();

const { PositionsModel } = require("../model/PositionsModel");
const { HoldingsModel } = require("../model/HoldingsModel");
const { OrdersModel } = require("../model/OrdersModel");
const { userVerification } = require("../Middlewares/AuthMiddleware");

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/", userVerification);

router.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

router.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

router.get("/allOrders", async (req, res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
});

router.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    // Step 1: Always save the order in OrdersModel
    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();

    // Step 2: Handle BUY logic
    if (mode === "BUY") {
      let holding = await HoldingsModel.findOne({ name });

      if (holding) {
        // Update existing holding
        const totalQty = holding.qty + qty;
        const totalValue = holding.qty * holding.avg + qty * price;
        holding.avg = totalValue / totalQty;
        holding.qty = totalQty;
        holding.price = price; // latest market price
        await holding.save();
      } else {
        // Create new holding
        const newHolding = new HoldingsModel({
          name,
          qty,
          avg: price,
          price,
        });
        await newHolding.save();
      }
    }

    // Step 3: Handle SELL logic
    else if (mode === "SELL") {
      let holding = await HoldingsModel.findOne({ name });

      if (!holding) {
        return res.status(400).send("Error: Cannot sell stock you don't own.");
      }

      if (qty > holding.qty) {
        return res
          .status(400)
          .send("Error: You are trying to sell more than you own.");
      }

      // Update or remove holding
      holding.qty -= qty;

      if (holding.qty === 0) {
        await HoldingsModel.deleteOne({ name });
      } else {
        await holding.save();
      }
    }

    res.send("Order placed successfully");
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).send("Server error while placing order");
  }
});

module.exports = router;

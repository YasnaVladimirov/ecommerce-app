const express = require("express");
require("dotenv").config();
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const app = express();

app.use(express.json());
app.use(cors());
//app.use(express.urlencoded());

app.post("/checkout", async (req, res) => {
  //console.log("req.body.lineItems", req.body);
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: req.body,
      mode: "payment",
      payment_method_types: ["card"],
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });
    res.status(200).json(session);
  } catch (error) {
    console.log("Error, ", error);
    res.status(500).json({error: error});
  }
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
});
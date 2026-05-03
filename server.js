const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/hotelbooking")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.post("/register", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Register Failed" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });

    if (user) {
      res.json({
        success: true,
        message: "Login Success"
      });
    } else {
      res.json({
        success: false,
        message: "Invalid Email or Password"
      });
    }

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
});

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});
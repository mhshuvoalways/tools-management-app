require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./config/db");
const cloudinary = require("./config/cloudinary");

const {
  userRouter,
  categoryRouter,
  toolRouter,
  orderRouter,
} = require("./routers");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
cloudinary();

app.use("/api", userRouter);
app.use("/api", categoryRouter);
app.use("/api", toolRouter);
app.use("/api", orderRouter);

app.get("*", (req, res) => {
  res.send("Tools management app");
});

db(app);

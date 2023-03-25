const express = require("express");
const cors = require("cors");
const { userRoutes } = require("./user.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("welcome to node.js");
});

app.use("/user", userRoutes);

app.listen(8000, () => {
  console.log("app running");
});

// test


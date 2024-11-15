const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

const testRoutes = require("./routes/testRoute");

app.use(cors());
app.options("*", cors());

//middleware
// app.use(bodyParser.json());
app.use(express.json());

//routes
const authRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
app.use(`/api/categories`, authRoutes);
app.use(`/api/product`, productRoutes);
app.use("/api", testRoutes);

//Database
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Connected to MongoDB");

    //Server
    app.listen(process.env.PORT, () => {
      console.log(`server is running http://localhost:${process.env.PORT} `);
    });
  })
  .catch((err) => {
    console.log(err);
  });
app.get("/", (req, res) => {
  res.json("Hello from the vikas!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// // app.get("/", function (req, res) {
// //   res.send("Hello World");
// // });

// // app.listen(3000);

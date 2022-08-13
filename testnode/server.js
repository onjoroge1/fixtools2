const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const allRoutes = require("./Routes/allRoutes");
// const connectionDB = require('./db');

dotenv.config({ path: "./config.env" });

// connectionDB();

const app = express();
app.use(express.json());

app.use(cors());
app.options("*", cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});

app.use(express.static("public"));
app.use("/api", allRoutes);
app.use("/uploads", express.static("uploads"));

// app.get("/", (req, res) => res.send("Hello World"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const port = process.env.PORT || 8080;

//ERR_DIR_CLOSED
app.listen(port, () =>
  console.log(
    `Server is running in ${process.env.APP_ENV} mode on port ${port}`
  )
);

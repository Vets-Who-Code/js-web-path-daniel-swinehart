const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const Create = require("./pages/api/Create&Update");
const Delete = require("./pages/api/Delete");
const Read = require("./pages/api/Read");

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// route
app.use("/", Create);
app.use("/", Delete);
app.use("/", Read);

app.listen(3000, () => {
  console.log("App listening to port 3000");
});

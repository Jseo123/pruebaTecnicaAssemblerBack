const express = require("express");
const morgan = require("morgan");

//init
const app = express();

//config

app.set("port", process.env.PORT || 4000);

//middlewares

app.use(morgan("dev"));

// global variables.

// Routes

// Server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});

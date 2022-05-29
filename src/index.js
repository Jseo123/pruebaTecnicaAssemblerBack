const express = require("express");
const morgan = require("morgan");
const mediaRoute = require("./routes/mediaRoute.js");

//init
const app = express();

//config

app.set("port", process.env.PORT || 4000);

//middlewares
app.use(express.json());
app.use(morgan("dev"));

// global variables.

// Routes

app.use(mediaRoute);

// Server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});

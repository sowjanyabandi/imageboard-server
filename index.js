const db = require("./db");
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
app.listen(port, () => console.log("Listening on port 4000"));

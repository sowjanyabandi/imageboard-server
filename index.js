const imageRouter = require("./image/router");
const db = require("./db");
const express = require("express");
const image = require("./image/model");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 4000;
app.listen(port, () => console.log("Listening on port 4000"));

const corsMiddleWare = cors();
app.use(corsMiddleWare);

const parserMiddleWare = bodyParser.json();
app.use(parserMiddleWare);

app.use(imageRouter);

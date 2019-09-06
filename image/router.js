const express = require("express");
const { Router } = express;
const image = require("./model");

const router = new Router();
router.get("/image", (req, res, next) => {
  image
    .findAll()
    .then(images => res.send(images))
    .catch(error => next(error));
});
module.exports = router;

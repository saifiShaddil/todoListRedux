const router = require("express").Router();
const express = require("express");

router.use(express.json());

const messages = require("../models/messages.model");

router.route("/").get((req, res) => {
  messages
    .find()
    .then((message) => res.json(message))
    .catch((err) => res.status(404).json("error :" + err));
});

router.route("/newMsg").post((req, res) => {
  const { username, message } = req.body;

  const newMsg = new messages({ username, message });

  newMsg
    .save()
    .then(() => res.json("New Message Recieved"))
    .catch((err) => res.status(404).json("error: " + err));
});

module.exports = router;

const router = require("express").Router()
const express = require("express");

router.use(express.json());

const User = require("../models/user.models");

router.route("/").get((req, res) => {
  User
    .find()
    .then((user) => res.json(user))
    .catch((err) => res.status(404).json("error :" + err));
});

router.route("/add").post((req, res) => {
  const { username, email } = req.body;
  const newUser = new User({ username, email });
  newUser
    .save()
    .then(() => res.json("New User!!"))
    .catch((err) => res.status(404).json("error: " + err));
});

module.exports = router;
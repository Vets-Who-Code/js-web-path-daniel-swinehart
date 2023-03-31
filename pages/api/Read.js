const express = require("express");
const router = express.Router();
const fs = require("fs");

// GET all users
router.get("/users", (req, res) => {
  Promise.resolve(JSON.parse(fs.readFileSync("data.json", "utf8")))
    .then((data) => res.status(202).json(data))
    .catch((err) =>
      res.status(400).json({ err: `Something went wrong : ${err}` })
    );
});

// GET a single user
router.get("/users/:id", (req, res) => {
  Promise.resolve(JSON.parse(fs.readFileSync("data.json", "utf8")))
    .then((users) => {
      const user = users.find((u) => u.id === req.params.id);
      if (!user) return res.status(404).json("User Not Found");
      res.status(202).json(user);
    })
    .catch((err) =>
      res.status(400).json({ err: `Something went wrong : ${err}` })
    );
});

module.exports = router;

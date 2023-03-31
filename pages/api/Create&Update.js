const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();
const fs = require("fs");

// CREATE a user
router.post("/users", (req, res) => {
  Promise.resolve(JSON.parse(fs.readFileSync("data.json", "utf8")))
    .then((user) => {
      user.push({ ...req.body, id: uuidv4() });
      fs.writeFileSync("data.json", JSON.stringify(user));
      res.status(202).json({ msg: "User created successfuly" });
    })
    .catch((err) =>
      res.status(400).json({ err: `Something went wrong : ${err}` })
    );
});

// PUT (update) an existing user
router.put("/users/:id", (req, res) => {
  Promise.resolve(JSON.parse(fs.readFileSync("data.json", "utf8")))
    .then((users) => {
      const userIndex = users.findIndex((u) => u.id === req.params.id);
      if (userIndex === -1) return res.send("User not found");
      users[userIndex] = { ...req.body, id: req.params.id };
      fs.writeFileSync("data.json", JSON.stringify(users));
      res.send("User updated");
    })
    .catch((err) =>
      res.status(400).json({ err: `Something went wrong : ${err}` })
    );
});

module.exports = router;

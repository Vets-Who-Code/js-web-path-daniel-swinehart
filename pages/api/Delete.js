const express = require("express");
const router = express.Router();
const fs = require("fs");

// DELETE
router.delete("/users/:id", (req, res) => {
  Promise.resolve(JSON.parse(fs.readFileSync("data.json", "utf8")))
    .then((users) => {
      const userIndex = users.findIndex((u) => u.id === req.params.id);
      if (userIndex === -1) return res.status(404).json("User not found");
      users.splice(userIndex, 1);
      fs.writeFileSync("data.json", JSON.stringify(users));
      res.status(202).json("User deleted");
    })
    .catch((err) =>
      res.status(400).json({ err: `Something went wrong : ${err}` })
    );
});

module.exports = router;

const express = require("express");
const router = express.Router();

router.get("/all", (req, res) => {
  res.send("Get All Teacher");
});

router.post("/add", (req, res) => {
  res.send("Post a Teacher");
});
router.put("/update", (req, res) => {
  res.send("Update a Teacher");
});
router.delete("/delete", (req, res) => {
  res.send("Delete a Teacher");
});

module.exports = router;

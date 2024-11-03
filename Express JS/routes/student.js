const express = require("express");
const {
  getAllStudent,
  addNewStudent,
  updateStudent,
  deleteStudent,
} = require("../controller/student");

const router = express.Router();

router.get("/all", getAllStudent);

router.post("/add", addNewStudent);
router.put("/update", updateStudent);
router.delete("/delete", deleteStudent);

module.exports = router;

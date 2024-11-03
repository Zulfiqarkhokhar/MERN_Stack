const express = require("express");

const getAllStudent = (req, res) => {
  res.send("Get All Student");
};
const addNewStudent = (req, res) => {
  res.send("Add a Student");
};

const updateStudent = (req, res) => {
  res.send("Update a Student");
};

const deleteStudent = (req, res) => {
  res.send("Delete a Student");
};

module.exports = { getAllStudent, addNewStudent, updateStudent, deleteStudent };

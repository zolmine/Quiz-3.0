const methods = require("../models/login");

// @desc Get all admin
// @route GET /api/admin
const getAllStudents = async (req, res) => {
  try {
    const students = await methods.getAllStudents;
    console.log(students);
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  getAllStudents,
};
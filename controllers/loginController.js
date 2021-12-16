const Login = require("../models/login");

// @desc Get all admin
// @route GET /api/admin
const getUserData = async (req, res) => {
  try {
    const login = await Login.login();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(login));
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
    getUserData,
  };
const auth = require("../models/login");

// @desc Get all admin
// @route GET /api/admin
const Login = async (req, res) => {
  try {
    const login = await auth.login();
    res.end(JSON.stringify(login));
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  Login,
};
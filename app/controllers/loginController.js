const Auth = require("../models/Auth");
const connex = require('../../config/dataBaseConnection');



const login = (req, res) => {
  connex.query(Auth.login(), (err, result) => {
    if (err) {
      res.status(400).json({
        'error': err.mesage,
        'error_line': err.file
      })
    }
    res.status(200).json({
      'data': result,
    });
  })

}


module.exports = {
  login,
};
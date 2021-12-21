const { resolve } = require("path");
// const { promise } = require("../config/dataBaseConnection");
const connex = require("../config/dataBaseConnection");
const login = () => {
  return new Promise((resolve) => {
    connex.query(`SELECT * FROM users`, (err, result) => {
      if (err) throw err;
      resolve(result);
      console.log(result);
    });
  });
};
const getAllStudents = () => {

    return new Promise((resolve) => {
      connex.query(`SELECT * FROM students`, (err, result) => {
        if(err) throw err;
        resolve(result);
        console.log(result);
      })
    })
}

module.exports = {
  login,
  getAllStudents
}
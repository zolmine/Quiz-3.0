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

module.exports = {
    login
}
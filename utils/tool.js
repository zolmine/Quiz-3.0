const ejs = require("ejs");
const {
    promise
} = require("../config/dataBaseConnection");

const redirect = (path, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    ejs.renderFile(path, function (err, str) {
        // str => Rendered HTML string
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(str);
        }
    });
};

module.exports = {
    redirect
};
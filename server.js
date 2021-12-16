const http = require('http');
const PORT = process.env.PORT || 8000;
const views = "./views/";
const {
    redirect
} = require("./utils/tool");

const {
    getUserData
} = require("./controllers/loginController")

const server = http.createServer((req, res) => {

    console.log(req.url);

    if (req.url === "/") {
        redirect(views + "loginForm.ejs", res);

    }
    if (req.url === `/login`) {
        getUserData(req, res)
    }
});


server.listen(PORT, () => console.log(`server running on ${PORT}`));
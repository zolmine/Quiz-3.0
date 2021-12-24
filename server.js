const express = require('express')
const app = express()
const bodyParser= require('body-parser')
const port = 3000
var path = require('path');

const UserController = require('./app/controllers/UserController');
const QuestionController = require('./app/controllers/QuestionController')
const LoginController = require('./app/controllers/LoginController')

// controllers methods

const res = require('express/lib/response')

// adding the templite engine with path specification

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views/pages'));

// indexing used libraries for app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(cors());

// routers
app.get('/', (req, res) => {
    res.redirect('/login')
})
app.get('/login', (req, res) => {
  res.render('login')
//   console.log(req);
})
app.get('/dashboard', (req, res) =>{
  res.render('dashboard')
})

app.get('/questions', (req, res) =>{
  res.render('questions')
})

/* auth api */

app.get('/api/auth', LoginController.login);

/* api Links for users/ */

app.post('/api/addStudent', UserController.userRegister);
app.get('/api/getAllStudents', UserController.getAllStudents)
app.get('/api/update/:id', UserController.userUpdate)
app.get('/api/getUser/:id', UserController.getUserById)
app.get('/api/getUser2/:id', UserController.getUserById2)

/* api for questions */ 

app.post('/api/addQuestion', QuestionController.addNewQuestion )

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
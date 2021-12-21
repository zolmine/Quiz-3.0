const User = require('../models/User');
const connex = require('../../config/dataBaseConnection');
const { connect } = require('../../config/dataBaseConnection');


const userRegister = (req, res, next) => {

    const userData = {
        fullName: req.body.fullName,
        email: req.body.email,
        userName: req.body.userName,
        password: req.body.password,
        position: req.body.position
    }
    const student = new User(userData)

    connex.query(student.addUser(), (err, result) => {
        if (err) {
            res.status(400).json({
                'error': err.mesage,
                'error_line': err.file
            })
        }
        console.log(result);

        connex.query(student.addStudent(result.id))
    })

};

const getAllStudents = (req, res, next) => {

    connex.query(User.getAllUsers(), (err, result) => {
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

const userUpdate = (req, res) => {

    const userData = {
        id: req.body.studentId,
        fullName: req.body.fullName,
        email: req.body.email,
    }    
    connect.query(User.updateUser(userData), (err, result) => {
        if(err){
            res.status(400).json({
                'error': err.mesage,
                'error_line': err.file
            })
        }
        console.log(result);
    })


}

module.exports = {
    userRegister,
    getAllStudents,
    userUpdate
}
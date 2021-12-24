const User = require('../models/User');
const connex = require('../../config/dataBaseConnection');


const userRegister = (req, res) => {

    const userData = {
        fullName: req.body.fullName,
        email: req.body.email,
        userName: req.body.userName,
        password: req.body.password,
        position: "student"
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

        connex.query(student.addStudent(result.insertId), (err, results) => {
            if (err) {
                res.status(400).json({
                    'error': err.mesage,
                    'error_line': err.file
                })
            }
        })
    })

};

const getAllStudents = (req, res) => {

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
    connex.query(User.updateUser(userData), (err, result) => {
        if (err) {
            res.status(400).json({
                'error': err.mesage,
                'error_line': err.file
            })
        }
        console.log(err);
    })
}

const getUserById = (req, res) => {

    id = req.params.id
    connex.query(User.getById(id), (err, result) => {
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
const getUserById2 = (req, res) => {
    connex.query(User.getUserById(id), (err, result) => {
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
    userRegister,
    getAllStudents,
    userUpdate,
    getUserById,
    getUserById2
}
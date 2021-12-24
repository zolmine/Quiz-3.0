const Question = require('../models/Question')
const connex = require('../../config/dataBaseConnection')
const Answer = require('../models/Answer')

const addNewQuestion = (req, res) => {

    // req.body.answers.map((item) => {
    //     console.log(item);
    // })
    const description = req.body.question
    // var questionId 


    connex.query(Question.addQuestion(description), (err, result) => {
        if (err) {
            res.status(400).json({
                'error': err.mesage,
                'error_line': err.file
            })
        }

        req.body.answers.map(item => {
            connex.query(Answer.insertAnswers(result.insertId, item), (err, result) => {
                if (err) {
                    res.status(400).json({
                        'error': err.mesage,
                        'error_line': err.file
                    })
                }
            })
        })

    })

    
    // connex.query(Answer.insertAnswers(questionId, req.body.answers), (err, result) => {
    //     if (err) {
    //         res.status(400).json({
    //             'error': err.mesage,
    //             'error_line': err.file
    //         })
    //     }
    // })
}






module.exports = {
    addNewQuestion,
}
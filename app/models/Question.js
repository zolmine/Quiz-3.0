class Question {

    static addQuestion(data) {
        return `Insert into questions(description) \
                    VALUES('${data}')`
    }
}

module.exports = Question
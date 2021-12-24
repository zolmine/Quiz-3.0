class Answer {

    static insertAnswers(id,data) {
        return `insert into answers(answer, status,questionId) \ 
                    Values('${data.answer}', '${data.status}', '${id}')`
    }

}

module.exports = Answer
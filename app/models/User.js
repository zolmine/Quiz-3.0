
class User {

    constructor(data) {
        this.fullName = data.fullName;
        this.email = data.email;
        this.username = data.username;
        this.password = data.password;
        this.position = data.position;
    }

    addStudent(userId) {
        return `INSERT INTO students(fullName, email,userId) \
                    VALUES('${this.fullName}','${this.email}','${userId}')`;
    }

    addUser() {
        return `INSERT INTO users(User_name, Password, position) \
                    VALUES('${this.username}', '${this.password}', '${this.position}')`
    }

    udateUser(data) {
        return `UPDATE students SET fullName = '${data.fullName}', email = '${data.email}' WHERE studentId = '${data.studentId}'`
    }

    static getAllUsers() {
        return `SELECT * FROM students`;
     }



}

module.exports = User;
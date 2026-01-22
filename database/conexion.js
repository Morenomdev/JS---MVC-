const mysql = require('mysql2')

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'courses'
})

db.connect((error) => {
    if (error) {
        throw error
    }
    console.log('Database connect');

})

module.exports = db
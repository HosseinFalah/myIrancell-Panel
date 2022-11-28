const mysql = require('mysql');

const MyIrancellDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'myirancell'
});

module.exports = MyIrancellDB;
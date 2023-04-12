const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'springstudent',
    database: 'node_complete',
    password: 'springstudent'
});

module.exports = pool.promise();
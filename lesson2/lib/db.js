const mysql = require('mysql');
let connection = null;

function getConnection() {
    if (!connection) {
        connection = mysql.createConnection({
            host: process.env.MYSQL_HOST || 'localhost',
            user: process.env.MYSQL_USER || 'user',
            password: process.env.MYSQL_PASS || 'password',
            database: process.env.MYSQL_DB || 'mydb',
        });
    }
    return connection;
}

function init() {
    if (!connection) {
        getConnection();
    }
}

module.exports.getConnection = getConnection;
module.exports.init = init;

module.exports.query = (sql, params) => {
    init();
    return new Promise((resolve, reject) => {
       connection.query(sql, params, (error, result) => {
           if (error) {
               return reject(error);
           }
           resolve(result);
       })
    });
};

module.exports.close = () => {
    if (connection) {
        connection.end();
        connection = null;
    }
}

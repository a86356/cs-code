//database


var mysql = require('mysql');

var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',         //数据库用户名
    password : 'root',         //数据库密码
    database : 'cms'          //数据库名称
});

function query(sql, callback) {
    pool.getConnection(function (err, connection) {
        // Use the connection
        connection.query(sql, function (err, rows) {
            callback(err, rows);
            connection.release();//释放链接
        });
    });
}
exports.query = query;

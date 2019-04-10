let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost';
    prot: 3306,
    user: 'root',
    password: 'Kingme94',
    database: 'burgers_db'
});

connection.connect(function(err){
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connect.threadId);
});

module.expports = connection;
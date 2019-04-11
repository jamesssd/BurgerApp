let connection = require('../config/connection.js');

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
}

function objToSql(ob){
    let arr = [];

    for(let key in ob) {
        let value = ob[key];

        if(Object.hasOwnProperty.call(ob, key)) {
            if(typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

let orm = {
    all: function(tableInput, cb) {
        let queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            }
            cb(result);
        });
    };
    create: function(table, cols, vals, cb){
        let queryString = 'INSERT INTO ' + table;

        queryString += ' (';
        queryStrnig =+ cols.toString();
        queryStrnig =+ ') ';
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        })
    },
    update: function(table, objColVals, condition, cb) {
        let queryString = 'UPDATE ' + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });

    },
    delete: function(table, condition, cb) {
    let queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
        if (err) {
        throw err;
        }

        cb(result);
    });
    }    
};

module.exports = orm;
var connection = require('../config/connection.js');

var orm = {

    //select all
    all: (table, call)=>{
        var queryStr = 'SELECT * FROM ' + table;

        connection.query(queryStr, (err, res)=>{
            if (err) throw err;
            call(res);
        })
    },

    // insert one
    insert: (table, col, val, call)=>{
        var queryStr = 'INSERT INTO' + table;
        queryStr += '(' + column.toString() + ')';
        queryStr += 'VALUES (' + val + ')';
    },

    // update one
    update: (table, col, val, call)=>{
        var queryStr = 'INSERT INTO' + table;
        queryStr += '(' + column.toString() + ')';
        queryStr += 'VALUES (' + val + ')';
    }
};

module.exports = orm;
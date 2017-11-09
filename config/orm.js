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
    // insert: (table, col, val, call)=>{
    //     var queryStr = 'INSERT INTO ?? ;
    //     queryStr += '(' + column.toString() + ')';
    //     queryStr += 'VALUES (' + val + ')';
    // },

    // update one
    update: (table, val1, col, val2, call)=>{
        var queryStr = 'UPDATE ?? SET ? WHERE ?? = ?';

        connection.query(queryStr, [table, val1, col, val2], (err, res)=>{
            if (err) throw err;
            call(res);
        });
    }
};

module.exports = orm;
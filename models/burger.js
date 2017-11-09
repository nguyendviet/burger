var orm = require('../config/orm.js');

// to do:
var burger = {
    all: (call)=>{
        orm.all('burgers', (res)=>{
            call(res);
        });
    },
    // insert: () => {
    //     orm.insert();
    // },
    update: (col, val, call)=>{
        orm.update('burgers', 1, col, val, (res)=>{
            call(res);
        });
    }
};

module.exports = burger;
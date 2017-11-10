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
    update: (val, call)=>{
        orm.update('burgers', 'devoured', 1, 'id', val, (res)=>{
            call(res);
        });
    }
};

module.exports = burger;
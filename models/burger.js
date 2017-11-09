var orm = require('../config/orm.js');

// to do:
var burger = {
    all: (call) => {
        orm.all('burgers', (res)=>{
            call(res);
        });
    },
    // insert: () => {
    //     orm.insert();
    // },
    // update: () => {
    //     orm.update();
    // }
};

module.exports = burger;
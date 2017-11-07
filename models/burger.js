var orm = require('../config/orm.js');

// to do:
var burger = {
    all: () => {
        orm.all();
    },
    insert: () => {
        orm.insert();
    },
    update: () => {
        orm.update();
    }
};

module.exports = burger;
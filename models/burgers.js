let orm = require('../config/orm.js');

let burger = {
    all: function(cd) {
        orm.all('burger', function(res){
            cb(res);
        })
    },
    create: function(cols, vals, cb){
        orm.create('burger', cols, vals, fuction(res){
            cb(res);
        });
    },
    delete: function(condition, cb){
        orm.delete('burger', condition, function(res){
            cd(res);
        });
    }
};

module.exports = burger;
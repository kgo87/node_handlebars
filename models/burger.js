// var inquirer = require("inquirer");
const connection = require(".././config/connection");
const orm = require(".././config/orm");

// const { config } = require(".././config/connection");
//  function viewAll(){
//     orm.selectAll().then((results) => {
//         console.log(results);
//     }),

// }

// viewAll();





var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },

};

// Export the database functions for the controller.
module.exports = burger;
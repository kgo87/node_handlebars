// var inquirer = require("inquirer");
const connection = require(".././config/connection");
const orm = require(".././config/orm");

const db = require(".././config/orm");
const { config } = require(".././config/connection");

orm.selectAll().then((results) => {
    console.log(results);
})


// module.exports = burger;
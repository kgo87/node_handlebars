// var inquirer = require("inquirer");
const connection = require(".././config/connection");
const orm = require(".././config/orm");


const { config } = require(".././config/connection");


function viewAll(){
    orm.selectAll().then((results) => {
        console.log(results);
        // return res.send(results);
        // res.render("index", { wishes: results });

    })

}

viewAll();

// const view = viewAll();
// module.exports = view;

module.exports = {
    viewAll()
}
const connection = require("./connection");
const sqlQueries = {
    selectAll() {
        return connection.query("SELECT * FROM burgers")
    },
    insertOne() {
        return connection.query("INSERT INTO burgers SET ?", data)
    },
    updateOne() {
        return connection.query("UPDATE burgers SET ? WHERE ?", data)
    }

}

module.exports = sqlQueries;
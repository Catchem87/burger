var connection = require('../config/connection.js');

// create the methods that will execute the necessary MySQL commands in the controllers
// These are the methods you will need to use in order to retrieve and store data in your database

var orm = 
{
    // selectAll()
    selectAll: function(callback)
    {
        // MySQL query
        connection.query('SELECT * FROM burgers', function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },

    // insertOne()
    insertOne: function(burger_name, callback)
    {
        // MySQL query
        connection.query('INSERT INTO burgers SET ?',
        {
            burger_name: burger_name,
            devoured: false,
        }, function(err, result) {
            if (err) throw err;
            callback(result)
        });
    },

    // updateOne()
    updateOne: function(burgerID, callback) 
    {
        // MySQL query
        connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}],
            function(err, result) {
                if (err) throw err;
                callback(result);
            });
    }
};

// Export the ORM object
module.exports = orm;
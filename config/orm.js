var connection = require('./connection');

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    };
    console.log('connected as id ' + connection.threadId);
});

var orm = {
    // Select All
    selectAll: function(callback) {
        // run query
        connection.query('SELECT * FROM burgers', function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },

    // Insert One
    insertOne: function(burger_name, callback) {
        connection.query('INSERT INTO burgers SET ?', {
            burger_name: burger_name,
            devoured: false,
        }, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },

    // Update One
    updateOne: function(burgerID, callback) {
        // run query
        connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}], function(err, result) {
            if (err) throw err;
            callback(result);
        });
    }
};

module.exports = orm;
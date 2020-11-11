const mysql =  require('mysql');

// Settings DB

const mysqlConnection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'cvtheque'

})

// Connect to DB

mysqlConnection.connect(function(err) { 

    if(err){

        console.log(err);
        return;

    } else {

        console.log('Db is connected');

    }

});   

module.exports = mysqlConnection;
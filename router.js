const express = require('express');
// const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'data',
  
  //multiple query
  multipleStatements: true
});

const app = express();
app.get('/', function (req, res) {
    connection.getConnection(function (err, connection) {

    //SELECT * FROM contact
    connection.query('SELECT * FROM trans; ', function (error, results, fields) {
     
      if (error) throw error;
      res.send(results)
    });
  });
});



app.listen(3000, () => {
 console.log('Go to http://localhost:3000/ so you can see the data.');
});

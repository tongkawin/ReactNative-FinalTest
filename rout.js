const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'final',
});

const app = express();
app.get('/staff', function (req, res) {
  connection.getConnection(function (err, connection) {
    connection.query('SELECT * FROM staff', function (error, results) {
      if (error) throw error;
      res.send(results);
    });
  });
});

app.listen(3000, () => {
  console.log('Go to http://localhost:3000/staff so you can see the data.');
});

app.get('/customer', function (req, res) {
  connection.getConnection(function (err, connection) {
    connection.query('SELECT * FROM customer', function (error, results) {
      if (error) throw error;
      res.send(results);
    });
  });
});

app.listen(3001, () => {
  console.log('Go to http://localhost:3001/customer so you can see the data.');
});

app.get('/booking', function (req, res) {
  connection.getConnection(function (err, connection) {
    connection.query(
      'SELECT b.* , c.CName FROM booking b, customer c WHERE b.CID = c.CID',
      function (error, results) {
        if (error) throw error;
        res.send(results);
      },
    );
  });
});
app.listen(3002, () => {
  console.log('Go to http://localhost:3002/booking so you can see the data.');
});

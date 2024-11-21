const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'orders_db',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.get('/orders', (req, res) => {
  db.query('SELECT * FROM orders', (err, results) => {
    if (err) res.status(500).send(err);
    else res.json(results);
  });
});

app.post('/orders', (req, res) => {
  const { name, quantity, price_per_unit } = req.body;
  db.query(
    'INSERT INTO orders (name, quantity, price_per_unit) VALUES (?, ?, ?)',
    [name, quantity, price_per_unit],
    (err, results) => {
      if (err) res.status(500).send(err);
      else res.status(201).json(results);
    }
  );
});

app.delete('/orders/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM orders WHERE id = ?', [id], (err, results) => {
    if (err) res.status(500).send(err);
    else res.status(200).json(results);
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

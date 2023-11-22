const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// PostgreSQL connection pool
const pool = new Pool({
  user: 'myuser',
  host: 'db',
  database: 'mydatabase',
  password: 'mypassword',
  port: 5432,
});

app.get('/', async (req, res) => {
  try {
    // Query the database
    const result = await pool.query('SELECT * FROM mytable');
    const rows = result.rows;

    // Display the data on the web page
    let responseText = '<h1>Data from PostgreSQL</h1>';
    responseText += '<ul>';
    rows.forEach(row => {
      responseText += `<li>ID: ${row.id}, Name: ${row.name}</li>`;
    });
    responseText += '</ul>';

    res.send(responseText);
  } catch (error) {
    console.error('Error executing PostgreSQL query:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Simple GET API using Express.js
const express = require('express');
const app = express();
const port = 3000;

// Student data directly in code
const student = {
  id: 1,
  name: "John Doe",
  age: 20,
  grade: "A"
};

app.get('/student', (req, res) => {
  res.json(student);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// app.js

const express = require('express');
const app = express();
const port = 3111;

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));

// Serve the HTML page with the form
app.get('/', (req, res) => {
  res.sendtext(path.join(__dirname,'inde.html'));
});

// Route to handle form submission and print the name in the response
app.post('/name', (req, res) => {
  const { name } = req.body;
  res.send(`Hello, ${name}!`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

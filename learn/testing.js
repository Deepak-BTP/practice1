const express = require('express');
const app = express();
const port = 3113;

// Middleware to parse incoming URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Serve the HTML form to the client
app.get('/', (req, res) => {
  res.send(`
    <form action="/submit" method="POST">
      <label for="username">Enter your username:</label>
      <input type="text" id="username" name="username">
      <button type="submit">Submit</button>
    </form>
  `);
});

// Handle the form submission
app.post('/submit', (req, res) => {
  const username = req.body.username;
  res.send(`Hello, ${username}! Your data has been submitted.`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

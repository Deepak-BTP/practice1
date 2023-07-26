// app.js

const express = require('express');
const app = express();
const port = 3010;

// Middleware to parse incoming request bodies
app.use(express.json());

// Dummy data for users
let users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
];
app.get('/',(req,res)=>{
  res.send('welcome to API..!!');
})
// Route to get all users
app.get('/api/users', (req, res) => {
  res.json(users);
});
app.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const a=req.params.id;
  const { name } = req.body;
  const userIndex = users.findIndex((user) => user.id === parseInt(id));

  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(users[userIndex]);
});


// Route to add a new user
app.post('/api/users', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'Name is required' });
  }

  const newUser = {
    id: users.length + 1,
    name,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// Route to update a user by ID
app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const userIndex = users.findIndex((user) => user.id === parseInt(id));

  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  users[userIndex].name = name;
  res.json(users[userIndex]);
});

// Route to delete a user by ID
app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== parseInt(id));
  res.json({ message: 'User deleted successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

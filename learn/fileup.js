// app.js

const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3006;

// Configure Multer to handle file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'up'); // Upload files to the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to handle file upload
app.post('/uploa', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
    res.send(name);
  }
  res.send('File uploaded successfully!',name);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

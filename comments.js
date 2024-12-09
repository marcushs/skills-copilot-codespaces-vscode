// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import database
const db = require('./database');

// Import middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Import routes
const comments = require('./routes/comments');
app.use('/comments', comments);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

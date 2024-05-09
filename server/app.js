const express = require('express');
const multer  = require('multer')
const upload = multer()
const app = express();
require('./db/mongoose');
const cors = require('cors');
const port = 5000;

app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
}));

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies (if needed)
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log('Incoming request:', req.method, req.url);
  console.log('Request headers:', req.headers); // Verify Content-Type
  console.log('Request body:', req.body); // This should not be undefined
  next(); // Proceed to the next middleware/route
});

// Import your router module
const mainRouter = require('./routes/mainRouter');

// Use the router for handling routes
app.use('/', mainRouter);

app.use('/about', (req, res) => {
  res.send('About this project');
});

app.use('/workers', (req, res) => {
  res.send('html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

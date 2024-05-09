const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
RoutesHandler = require('./routes_handler');

// Define a basic route
router.get('/', (req, res) => {
  res.send('Hello, World!');
});

router.post('/newClient', (req, res) => {
  RoutesHandler.add_client_contact(req, res)
});

router.post('/addPicture', upload.single('image'), RoutesHandler.addPicture);

router.post('/addRecommendation', upload.single('image'), RoutesHandler.addRecommendation);

router.get('/images/:category', RoutesHandler.getImagesByCategory);

router.get('/recommendations', RoutesHandler.getRec);

router.get('/projects', (req, res) => {
  res.send('list of projects');
});



router.get('/pastProjects', (req, res) => {
  res.send('list of past projects');
});

// Export the router to be used in other parts of the application
module.exports = router;

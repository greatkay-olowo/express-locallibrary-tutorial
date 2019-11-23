const express = require('express');

const router = express.Router();

// Homepage route
router.get('/', (req, res) => {
  res.send('Wiki home page');
});

router.get('/about', (req, res) => {
  res.send('About this wiki');
});

module.exports = router;

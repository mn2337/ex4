const express = require('express');
const router = express.Router();

router.get('/', (req, res) => (res.send('About  my  page')));
router.get('/me', (req, res) => (res.send('About  Me')));

module.exports = router;

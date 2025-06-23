const express = require('express');
const router = express.Router();
const { getQuotes, addQuote } = require('../controllers/quotesController');

router.get('/', getQuotes);
router.post('/', addQuote);

module.exports = router;
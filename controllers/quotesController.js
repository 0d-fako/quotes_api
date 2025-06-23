const { getAllQuotes, addQuoteToStore } = require('../data/quotesStore');

exports.getQuotes = (req, res) => {
  const quotes = getAllQuotes();
  res.status(200).json(quotes);
};

exports.addQuote = (req, res) => {
  const { author, text } = req.body;
  if (!author || !text) {
    return res.status(400).json({ message: 'Author and text are required.' });
  }
  const newQuote = addQuoteToStore(author, text);
  res.status(201).json(newQuote);
};
const quotes = [];

exports.getAllQuotes = () => quotes;

exports.addQuoteToStore = (author, text) => {
  const newQuote = { id: quotes.length + 1, author, text };
  quotes.push(newQuote);
  return newQuote;
};
const express = require('express');
const bodyParser = require('body-parser');
const quoteRoutes = require('./routes/quotes');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/quotes', quoteRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
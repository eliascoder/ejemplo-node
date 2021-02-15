const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 3050;

const app = express();

// middleware
app.use(express.json());
app.use(morgan('dev'));

app.listen(PORT, () => {
    console.log(`Ejemplo is UP ${PORT}`)
});
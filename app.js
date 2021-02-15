const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT || 3050;

const app = express();

// middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/api/usuarios', require('./routes/usuarios'))

app.listen(PORT, () => {
    console.log(`Ejemplo is UP ${PORT}`)
});
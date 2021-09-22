const express = require('express');
const exphdb = require('express-handlebars');
const path = require('path');
const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => res.send('hola'))

app.listen(PORT, console.log(`escuchando en el puerto ${PORT}`))

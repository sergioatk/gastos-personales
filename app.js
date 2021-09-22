const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main",
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        },
    })
);
app.set("view engine", "handlebars");

app.get('/', (req, res) => {
    res.render('view', {
        layout: 'main',
        data: {
            titulo: 'Lista de Clubes de Inglaterra',
            subTitulo: 'Lista actual'
        }
    })
})

app.use('/movimientos', require('./routes/movimientos'));

app.listen(PORT, console.log(`escuchando en el puerto ${PORT}`))

const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();

const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Nicecoding',
    database: 'expensetracking',
    port: '5432'
})

app.use(express.json());
app.use(express.urlencoded({extended: false}));

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




app.get('/', async (req, res) => {
    res.status(200);

    try {
        const lastTenMovements = await pool.query('SELECT * FROM budget ORDER BY id DESC LIMIT 10'); 
        res.render('view', {
            layout: 'main',
            data: lastTenMovements.rows
      
        })
    } catch (error) {
        res.render('view', {
            layout: 'main',
            
      
        })
        console.log('no existen movimientos')
    }

    

})

app.get('/test', (req, res) => {
    res.status(200).send('estas en test');
})

app.use('/movements', require('./routes/movements'));

app.listen(PORT, console.log(`escuchando en el puerto ${PORT}`))

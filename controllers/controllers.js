const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Nicecoding',
    database: 'expensetracking',
    port: '5432'
})



const getMovements = async (req, res) => {
    const response = await pool.query('SELECT * FROM budget');
    res.status(200).json(response.rows);
};

const getMovementById = async (req, res) => {
    const id = req.params.id;

    const response = await pool.query(`SELECT * FROM budget WHERE id = $1`, [id]);

    if (!response.rows[0]) {
        res.status(400).send('there are no movements with id ' + id);
        return;
    }
    res.status(200).json(response.rows[0]);
}

const getMovementByType = async (req, res) => {

    const type = req.params.type;

    if (type === 'income') {
        const response = await pool.query('SELECT * FROM budget WHERE movement_type = $1', [type]);

        if (!response.rows[0]) {
            res.status(400).send(`There are no records with type '${type}'`);
            return;
        }

        res.status(200).json(response.rows);

    } else if (type === 'expense') {
        const response = await pool.query('SELECT * FROM budget WHERE movement_type = $1', [type]);

        res.status(200).json(response.rows);

    } else {
        res.status(404).send('you have to query for a valid type');
    }
};

const createMovement = async (req, res) => {
    const { date, type, description, amount } = req.body;
    const response = await pool.query(`INSERT INTO budget (movement_date, movement_type, movement_description, movement_amount) VALUES ($1, $2, $3, $4)`, [date, type, description, amount]);

    res.status(200).redirect('http://localhost:3000/');

};

const deleteMovement = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query(`DELETE FROM budget WHERE id = $1`, [id]);
    res.status(200).redirect('http://localhost:3000/');
};

const editMovement = async (req, res) => {
    const id = req.params.id;
    const { date, description, amount } = req.body;

    const response = await pool.query(`SELECT * FROM budget WHERE id = $1`, [id]);

    if (!response.rows[0]) {
        res.status(400).send('theres no record to edit');
        return
    } else {
        const responseUpdate = await pool.query(`UPDATE  budget SET movement_date = $1, movement_description = $2, movement_amount = $3 WHERE id = $4`, [date, description, amount, id]);
    }
};

const renderEditForm = async (req, res) => {
    const id = req.params.id;

    const response = await pool.query(`SELECT * FROM budget WHERE id = $1`, [id]);

    const { movement_date: date, movement_description: description, movement_amount: amount } = response.rows[0];
    const elementToEdit = [date, description, amount];
    
    res.render('form', {
        layout: 'main',
        data: {
            id,
            endpoint: 'http://localhost:3000/movements/',
            elementToEdit
        }
    })
};

const renderCreateForm = (req, res) => {

    res.render('form', {
        layout: 'main',
        data: 'hola'
  
    })
    
};

const renderAddForm = (req, res) => {
    res.render('form', {
        layout: 'main',
        data: {
            method: 'POST',
            endpoint: 'http://localhost:3000/movements/'
        }
  
    })
}

module.exports = {
    getMovements,
    getMovementById,
    getMovementByType,
    createMovement,
    deleteMovement,
    editMovement,
    renderEditForm,
    renderCreateForm,
    renderAddForm
};
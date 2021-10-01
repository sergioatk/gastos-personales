const express = require('express');
const router = express.Router();
const { getMovements, createMovement, getMovementById, deleteMovement, editMovement, getMovementByType, renderEditForm, renderCreateForm, renderAddForm } = require('../controllers/controllers');

router.get('/', getMovements);

router.get('/id/:id', getMovementById); 

router.get('/type/:type', getMovementByType);

router.get('/edit/:id', renderEditForm);

router.get('/form', renderCreateForm);

router.get('/add', renderAddForm)

router.post('/', createMovement);

router.delete('/:id', deleteMovement);

router.put('/:id', editMovement);


module.exports = router;
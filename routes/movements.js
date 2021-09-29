const express = require('express');
const router = express.Router();
const { getMovements, createMovement, getMovimientoById, deleteMovement, editMovement, getMovementByType } = require('../controllers/controllers');

router.get('/', getMovements);

router.get('/:id', getMovimientoById);

router.get('/type/:type', getMovementByType);

router.post('/', createMovement);

router.delete('/:id', deleteMovement);

router.put('/:id', editMovement);

module.exports = router;
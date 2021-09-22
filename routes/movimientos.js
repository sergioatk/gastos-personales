const express = require('express');
const router = express.Router();

router.get('/ingresos', (req, res) => res.send('seccion ingresos'));

router.get('/egresos', (req, res) => res.send('seccion egressos'));


module.exports = router;
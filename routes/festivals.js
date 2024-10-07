const express = require('express');
const router = express.Router();

const {
    readOne, 
    readAll, 
    createData,
    updateData,
    deleteData
} = require('../controllers/festival.controller.js');

router.get('/', readAll);
router.get('/:id', readOne);
router.post('/', createData);
router.put('/:id', updateData);
router.delete('/:id', deleteData);

module.exports = router;
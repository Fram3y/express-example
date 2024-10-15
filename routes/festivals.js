const express = require('express');
const router = express.Router();
const {loginRequired} = require('../controllers/user.controller.js')

const {
    readOne, 
    readAll, 
    createData,
    updateData,
    deleteData
} = require('../controllers/festival.controller.js');

router.get('/', readAll);
router.get('/:id', loginRequired, readOne);
router.post('/', createData);
router.put('/:id', updateData);
router.delete('/:id', deleteData);

module.exports = router;
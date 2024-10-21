const express = require('express');
const router = express.Router();


const {
    readOne, 
    readAll, 
    createData,
    updateData,
    deleteData
} = require('../controllers/festival.controller.js');

const {loginRequired} = require('../controllers/user.controller.js');

router.get('/', readAll);
router.get('/:id', loginRequired, readOne);
router.post('/', loginRequired, createData);
router.put('/:id',loginRequired, updateData);
router.delete('/:id',loginRequired, deleteData);

module.exports = router;
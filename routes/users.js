const express = require('express');
const router = express.Router();

const {
    readOne, 
    readAll, 
    createData,
    updateData,
    deleteData
} = require('../controllers/user.controller.js');

router.get('/', readAll);
router.get('/:id', readOne);
router.post('/', createData);
router.put('/:id', updateData);
router.delete('/:id', deleteData);

module.exports = router;

// router.get('/', (req, res) => {
//     res.status(200).json({
//         "message": "All User Retrieved"
//     });
// });

// router.get('/:id', (req, res) => {
//     let id = req.params.id;

//     res.status(200).json({
//         "message": `User with ${id} has been retrieved`
//     });
// });

// router.post('/', (req, res) => {
    
// });
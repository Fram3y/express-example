const express = require('express');
const router = express.Router();

const {
    register,
    login
} = require('../controllers/user.controller.js');

router.post('/register', register);
router.post('/login', login);

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
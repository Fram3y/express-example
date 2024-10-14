const express = require('express');
const app = express();
const port = 5000;

require('dotenv').config();
require('./config/db.js')();

app.set('view engine', 'html');
app.use(express.static(__dirname + '/views/'));
app.use(express.json());

app.use('/api/users', require('./routes/users'));
app.use('/api/festivals', require('./routes/festivals'));
app.use('/api/stages', require('./routes/stages'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

//routes
// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

// app.get('/about', (req, res) => {
//     res.send('<h1>About Page</h1>');
// });

// app.use((req, res, next) => {
//     console.log(req.headers);
//     // res.send('headers logged');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('this is my second middleware');
//     res.send('second middleware');
// });




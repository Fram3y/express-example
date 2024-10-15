const express = require('express');
const app = express();
const port = 5000;

require('dotenv').config();
require('./config/db.js')();

// app.set('view engine', 'html');
app.use(express.static(__dirname + '/views/'));
app.use(express.json());

// app.use((req, res, next) => {
//     console.log(`Time: `, Date.now())
//     next();
// })

// app.use((req, res, next) => {
//     console.log(`REQUEST LOG: `, )
// })

////////////////// AUTHORIZATION //////////////////
app.use((req, res, next) => {
    let authHeader = req.headers?.authorization?.split(' ');
    
    if(req.headers?.authorization && authHeader[0] === 'Bearer'){
        jwt.verify(authHeader[1], 'mykey',  (err, decoded) => {
            if(err) req.user = undefined;
            req.user = decoded;
            next();
        })
    } else {
        req.user = undefined;
        next();
    }
})
////////////////// AUTHORIZATION //////////////////

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




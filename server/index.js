// middlewares
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

// App init
const app = express();
app.use(morgan('tiny'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.static('./public'));
/*
app.get('/:id', (req, res) => {
    //Redirect to URL

});

app.get('/url/;id', (req, res) => {
    //create a short url


});

app.post('/url/', (req, res) => {
    //create a short url


});
*/

port = process.env.PORT || 1337;
app.listen(port, () => {
    console.log('Listening at http://localhost:{port}');
});

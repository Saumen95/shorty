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

app.get('/', (req, res) => {
    res.json({
        message: 'Shorty,You nice little bitch'

    });

    const port = process.env.PORT || 1330;
    app.listen(port, () => {
        console.log('Listening at http://localhost/${port}');
    })

});
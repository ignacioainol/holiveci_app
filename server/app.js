const express = require('express');
const app = express();
const morgan = require('morgan');

require('dotenv').config();


//settings
app.set('port', process.env.PORT || 5000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes
app.use(require('./routes'));


app.listen(app.get('port'), () => {
    console.log(`Sever running on port ${app.get('port')}`);
});
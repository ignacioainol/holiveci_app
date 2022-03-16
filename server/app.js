const express = require('express');
const app = express();
require('dotenv').config();


//config

//routes
app.use(require('./routes'));


app.listen(3000, () => {
    console.log("Server running on port 3000");
})
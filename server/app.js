const express = require('express');
const app = express();
require('dotenv').config();


//config


app.listen(3000, () => {
    console.log("Server running on port 3000");
})
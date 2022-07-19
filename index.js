const express = require('express');
const app = express();
const port=9000;

const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

// set a view engin
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine', 'ejs');
app.set('views','./views');

app.use('/', require('./routes'));

app.listen(port , function(err){
    if(err){
        console.log(`Error in running the Server: ${err}`);

    }
    console.log(`Server is Running on Port : ${port}`);
});
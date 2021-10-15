//require express package
const express = require ('express');
//create the variable for PORT
const PORT = process.env.PORT || 3001;
//declare app equals to express method
const app = express ();

app.listen(3001, () => {
    console.log('Sever now on running on port 3001');
});
//require express package
const express = require ('express');
//create the variable for PORT
const PORT = process.env.PORT || 3001;
//declare app equals to express method
const app = express ();

//import the routes
const apiRoutes = require('./routes/API/index');
const htmlRoutes = require('./routes/HTML/index');

//parse string or array data
app.use(express.urlencoded({ extended: true }));
//parse JSON
app.use(express.json());
app.use(express.static('public'));

//use routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//create listen to variable PORT
app.listen(PORT, () => {
    console.log('Server now on running on port 3001');
});
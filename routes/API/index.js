// import path module
const path = require('path');
//import express router 
const router = require('express').Router();

//2 routes for html notes
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});
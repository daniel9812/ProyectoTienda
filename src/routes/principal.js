const express = require('express');
const router = express.Router();

router.get('/home', (req,res) =>{
    const primer ='primer';
    let segun ='segun';
    //res.send('agregar');
    res.render('principal/home');
    console.log('yo soy el consol');
});


module.exports = router;
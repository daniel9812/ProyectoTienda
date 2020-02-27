const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>{
    res.render('index');
});

router.get('/about', (req,res) =>{
    res.render('index/about');
});

router.get('/blog', (req,res) =>{
    res.render('index/blog');
});

router.get('/contact', (req,res) =>{
    res.render('index/contact');
});

router.get('/gallery', (req,res) =>{
    res.render('index/gallery');
});

router.get('/menu', (req,res) =>{
    res.render('index/menu');
});

router.get('/post', (req,res) =>{
    res.render('index/post');
});

module.exports = router; 
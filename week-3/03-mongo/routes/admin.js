const { Router } = require("express");
const express = require('express');
const adminMiddleware = require("../middleware/admin");
const Admin = require("../db/index");
const Course = require("../db/index");
const router = Router();
const port = 3000; 
    app = express();
    // Admin Routes
    app.post('/signup', (req, res) => {
        Admin.create({
            username: req.headers['username'],
            password: req.headers['password']
        })
        res.json({
            message: 'Admin created successfully'
        })
    });

    app.post('/courses', adminMiddleware, (req, res) => {
        Course.create({
            title: req.headers.title,
            description: req.headers.description,
            price: req.headers.price,
            image: req.headers.image
        })
        res.json({
            message: 'Course Created'
        })
    });

    app.get('/courses', adminMiddleware, async(req, res) => {
        let courses = await Course.find();
        res.send(courses);
    });

    app.listen(port,()=>{
        console.log(`Listening to port ${port}`);
    })


module.exports = router;
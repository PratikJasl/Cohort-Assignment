const mongoose = require('mongoose');
const express = require('express');
const { Router } = require("express");
const jwt = require('jsonwebtoken');
const port = 3000;
const jwtpassowrd = 'secret';
const app = express();

// Connect to MongoDB
try{
    mongoose.connect('mongodb+srv://pratikjaslofficial:xOxMzjc7gRMDBqz1@cluster0.zgqgijh.mongodb.net/');
    console.log('Connected to DB');
}
catch(error){
    console.log('Error connecting to Mongo:', error);
}
 
// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    image: String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

//Middlewares
async function adminMiddleware(req, res, next) {
    const token = req.headers.authorization;
    const verify = jwt.verify(token, jwtpassowrd, (error,decoded)=>{
        if(error){
            res.json({msg:'Please Sign up'});
        }
        else{
            next();
        }
    }); 
    
} 

async function userMiddleware(req, res, next) {
    const token = req.headers.authorization;
    const verify = jwt.verify(token, jwtpassowrd, (error,decoded)=>{
        if(error){
            res.json({msg:'Please Sign up'});
        }
        else{
            next();
        }
    }); 
}

// Admin Routes
app.post('/admin/signup', (req, res) => {
    const user = {
        username: req.headers.username,
        password: req.headers.password 
    }
    const token = jwt.sign(user, jwtpassowrd);
    Admin.create({
        username: req.headers.username,
        password: token
    })
    res.json({
        message: 'Admin created successfully',
        token: token
    })
});

app.post('/admin/signin', (req, res) => {
    const token = req.headers.authorization;
    console.log(token);
    const verify = jwt.verify(token, jwtpassowrd, (error,decoded)=>{
        if(error){
            res.json({msg:'Please Sign up'});
            console.log(error);
        }
        else{
            res.json({
                message: 'Admin logged in',
                decoded: decoded
            })
        }
    });
});

app.post('/admin/courses',adminMiddleware, (req, res) => {
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

app.get('/admin/courses',adminMiddleware, async(req, res) => {
    let courses = await Course.find();
    res.send(courses);
});

//User Routes
app.post('/user/signup', (req, res) => {
    const user = {
        username: req.headers.username,
        password: req.headers.password 
    }
    const token = jwt.sign(user, jwtpassowrd);
    User.create({
        username: req.headers.username,
        password: token
    })
    res.json({
        message: 'User created successfully',
        token: token
    })
});

app.post('/user/signin', (req, res) => {
    const token = req.headers.authorization;
    console.log(token);
    const verify = jwt.verify(token, jwtpassowrd, (error,decoded)=>{
        if(error){
            res.json({msg:'Please Sign up'});
            console.log(error);
        }
        else{
            res.json({
                message: 'User logged in',
                decoded: decoded
            })
        }
    });
});

app.get('/user/courses',userMiddleware, async(req, res) => {
    let courses = await Course.find();
    res.send(courses);
});

app.post('/user/courses/:courseId',userMiddleware, async(req, res) => {
    let id = req.headers.id;
    let course = await Course.find({_id:id});
    res.send(course);
});

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})

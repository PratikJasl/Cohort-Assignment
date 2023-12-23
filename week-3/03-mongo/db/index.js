const mongoose = require('mongoose');
const { Router } = require("express");
const express = require('express');
const router = Router();
const port = 3000;
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

async function adminMiddleware(req, res, next) {
    try{
        const username = req.headers.username;
        const password = req.headers.password;
        const verify = await Admin.findOne({username: username, password: password });
        if(verify){
            console.log("Admin is registered");
            next();
        }
        else{
            res.status(404).json({msg: 'Admin not registered'});
        }
    }
    catch(error){
        console.log("error in registration:", error);
        res.status(500).json({msg:"internal Server Error"});
    }
    
} 

async function userMiddleware(req, res, next) {
    try{
        const username = req.headers.username;
        const password = req.headers.password;
        const verify = await User.findOne({username: username, password: password });
        if(verify){
            console.log("User is registered");
            next();
        }
        else{
            res.status(404).json({msg: 'User not registered'});
        }
    }catch(error){
        console.log("error in registration:", error);
        res.status(500).json({msg:"internal Server Error"}); 
    }   
}
app = express();
    // Admin Routes
    app.post('/admin/signup', (req, res) => {
        Admin.create({
            username: req.headers.username,
            password: req.headers.password
        })
        res.json({
            message: 'Admin created successfully'
        })
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

    
// User Routes
app.post('/user/signup', (req, res) => {
    User.create({
        username: req.headers.username,
        password: req.headers.password
    })
    res.json({
        message: 'User created successfully'
    })
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
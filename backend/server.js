import dotenv from 'dotenv';
import connectDB from './config/db.js';
import express, { json } from 'express';
import { getCourses } from './service/courseService.js';

// dotenv.config();

// connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running");
})

app.get("/api/courses", getCourses)


app.listen(5000, console.log("Server started!"));
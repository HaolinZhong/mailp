import dotenv from 'dotenv';
import connectDB from './config/db.js';
import express, { json } from 'express';
import courseRoute from "./routes/courseRoute.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/api/courses", courseRoute);


app.get("/", (req, res) => {
    res.send("API is running");
})

app.listen(5000, console.log("Server started!"));
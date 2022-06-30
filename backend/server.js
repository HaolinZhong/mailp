import dotenv from 'dotenv';
import connectDB from './config/db.js';
import express, { json } from 'express';
import courseRoute from "./routes/courseRoute.js";
import { notFound, errorHandler} from "./middleware/errorMiddleware.js"

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/api/courses", courseRoute);


app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => {
    res.send("API is running");
})


app.listen(5000, console.log("Server started!"));
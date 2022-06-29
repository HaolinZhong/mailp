import express from "express";
import { getCourses } from "../service/courseService.js";


const router = express.Router();

router.route("/")
    .get(getCourses)


export default router
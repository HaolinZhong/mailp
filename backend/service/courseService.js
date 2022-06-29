import expressAsyncHandler from "express-async-handler";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const courses = require("../data/courses.json") 

// @Desc    GET all course infomation
// @Route   /api/courses
// @Access  private
const getCourses = expressAsyncHandler(async(req, res) => {
    res.json(courses)
    console.log(courses)
})


export {getCourses}
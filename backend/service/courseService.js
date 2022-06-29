import expressAsyncHandler from "express-async-handler";
import Course from "../model/course.js";

// @Desc    GET all course infomation
// @Route   /api/courses
// @Access  private
const getCourses = expressAsyncHandler(async(req, res) => {
    const courses = await Course.find({})
    res.status(200).json(courses)
})



export {
    getCourses
}
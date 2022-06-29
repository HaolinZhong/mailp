import expressAsyncHandler from "express-async-handler";
import Review from "../model/review.js";


// @Desc    GET reviews for one course by its id
// @Route   /api/courses/:id
// @Access  private
const getCourseReviews = expressAsyncHandler(async(req, res) => {
    const reviews = await Review.find({course: req.params.id})

    if (reviews) {
        res.status(200).json(reviews)
    } else {
        res.status(404)
        throw new Error("Currently there are no reviews for this course.")
    }
})
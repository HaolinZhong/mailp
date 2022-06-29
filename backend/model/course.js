import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    name: {type: String, required: true},
    code: {type: String, required: true},
    rating: {type: Number, required: true, default: 0},
    dept: {type: String, required: true},
    numReviews: {type: Number, required: true, default: 0},
    season: {type: String, required: true},
    reviews: [{
        review: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    }]
}, {
    timestamps: true
});

const Course = mongoose.model('course', courseSchema);

export default Course;
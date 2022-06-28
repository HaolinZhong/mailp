import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    body: {type: String, required: true},
    workload: {type: Number, required: true},
    difficulty: {type: Number, required: true},
    rating: {type: Number, required: true},
    numsLike: {type: Number}
}, {
    timestamps: true
})

const courseSchema = mongoose.Schema({
    name: {type: String, required: true},
    code: {type: String, required: true},
    rating: {type: Number, required: true, default: 0},
    dept: {type: String, required: true},
    numReviews: {type: Number, required: true, default: 0},
    season: {type: String, required: true},
    reviews: [reviewSchema]
}, {
    timestamps: true
});

const Course = mongoose.model('course', courseSchema);

export default Course;
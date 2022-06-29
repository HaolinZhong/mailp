import mongoose from "mongoose"

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
    numsLike: {type: Number, required: true, default: 0},
    numsDislike: {type: Number, required: true, default: 0}
}, {
    timestamps: true
})

const Review = mongoose.model('review', reviewSchema);


export default Review;
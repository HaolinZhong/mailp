import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config()

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    reviews: [{
        review: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    }]

}, {
    timestamps: true
});


userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function(next){
    if (!this.isModified('password')) {
        next()
    }

    const salt = await bcrypt.genSalt(process.env.HASHROUNDS)
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('user', userSchema)

export default User
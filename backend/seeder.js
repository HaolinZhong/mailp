import Course from "./model/course.js";
import User from "./model/user.js";
import Review from "./model/review.js";
import connectDB from "./config/db.js";
import initUsers from "./data/initUser.js";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const courses = require("./data/coursesR.json") 

connectDB()

const importData = async () => {
    try {
        await Course.deleteMany()
        await Review.deleteMany()
        await User.deleteMany()

        await User.insertMany(initUsers)
        await Course.insertMany(courses)
    
        console.log('Data Imported!')
        process.exit()
    } catch(error) {
        console.log(error)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await Course.deleteMany()
        await Review.deleteMany()
        await User.deleteMany()

        console.log('Data Destroyed')
        process.exit()
    } catch(error) {
        console.log(error)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}
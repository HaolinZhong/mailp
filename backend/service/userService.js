import expressAsyncHandler from "express-async-handler";
import User from "../model/user.js"
import sendMsg from "../utils/verifyEmail.js";
import Randomstring from "randomstring";

// @desc    User authentification
// @route   POST /api/users/login
// @access  Private
const authUser = expressAsyncHandler(async (req, res) => {

    const { email, password } = req.body

    const user = await User.findOne({ email: email })
  
    if (user && await user.matchPassword(password)) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

// @desc    Get user profile 
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = expressAsyncHandler(async (req, res) => {

    const user = await User.findById(req.user._id)
    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

// @desc    User registration
// @route   POST /api/users
// @access  Public

const registerUser = expressAsyncHandler(async (req, res) => {

    const { name, email, password } = req.body
    
    const foundUser = await User.findOne({ email: email })

    const { email: foundEmail, isActive, name: foundName, _id } = foundUser

    if (foundEmail && isActive) {
        res.status(400)
        throw new Error('User already exists')
    }  

    if (foundEmail && foundName !== name) {
        await foundUser.remove()
    }
    
    const verifyToken = Randomstring.generate();

    const user = await User.create({
        name,
        email,
        password,
        verifyToken
    })
    
    if (user) {
        const link = req.protocol + '://' + req.get('host') + "/users/verify/" + verifyToken;
        sendMsg(email, link)
    } else {
        res.status(400)
        throw new Error('Invalid user data. Please try to register again.')
    }
})


// @desc    User email verification
// @route   PUT /api/users/verify/:token
// @access  Public

const verifyUserEmail = expressAsyncHandler(async (req, res) => {
    const token = req.params.token
    const user = await User.find({verifyToken: token})

    if (user) {
        user.isActive = true
        await user.save()
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(404)
        throw new Error('Invalid verification token.')
    }
})


export { authUser }
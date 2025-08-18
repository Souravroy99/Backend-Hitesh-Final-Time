import { User } from "../models/user.models.js";
import uploadOnCloudinary from "../utils/Cloudinary.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async(req, res) => {
    // 1.) get the user info
    // 2.) validation
    // 3.) check the user exists or not
    // 4.) check for images
    // 5.) update images to cloudinary
    // 6.) create user
    // 7.) remove password and refresh token
    // 8.) Check res is valid or invalid
    // 9.) Return res 

    const { username, email, fullName, password } = req.body

    if(!username || !email || !fullName || !password) throw new ApiError(400, "All fields are required!")

    const isUserExists = await User.findOne({
        $or: [{ username }, { email }]
    })

    if(isUserExists) throw new ApiError(409, "User already exists")

    const avatarLocalPath = req.files.avatar[0].path
    const coverImageLocalPath = req.files?.coverImage[0].path    

    if(!avatarLocalPath) throw new ApiError(400, "Avatar file is required")

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if(!avatar) throw new ApiError(400, "Avatar file upload fail")

    const newUser = await User.create({
        username: username.toLowerCase(), 
        email, 
        fullName, 
        password, 
        avatar: avatar.url, 
        coverImage: coverImage?.url
    }); 


    // User.findById({_id: newUser._id})
    const createdUser = await User.findById(newUser._id).select("-password -refreshToken")  
    
    if(!createdUser) throw new ApiError(500, "Something went error while registering user")
    
    return res.status(201).json(
        new ApiResponse(201, createdUser, "User registered successfully")
    )
})

export {registerUser}
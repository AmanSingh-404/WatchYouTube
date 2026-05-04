import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username : {
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:[true, 'Email is required'],
        trim:true,
        lowercase:true,
        unique:true
    },
    fullName:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:[true, 'password is required']
    },
    coverImage:{
        type:String,
        required:true
    },
    refreshToken:{
        type:String,
        required:true
    },
    WatchHistory:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Video'
        }
    ]


}, { timestamps: true })

export const User = mongoose.model("User", userSchema)

import mongoose from "mongoose"

const videoSchema = new mongoose.Schema(
    {
        videoFile:{
            type:String,
            required:true
        },
        thumbnail:{
            type:String,
            required:true
        },
        owner:{
            type:mongoose.Types.ObjectId,
            ref:'User'
        },
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        views:{
            type:Number,
            default:0
        },
        duration:{
            type:Number,
            required:true
        },
        isPublished:{
            type:Boolean,
            default:true
        },
    },
    { timestamps: true}
)

export const Video = mongoose.model("Video", videoSchema)
import dotenv from 'dotenv'
import connectDB from './db/db.js'

dotenv.config()


connectDB()







// import mongoose from 'mongoose'
// import { DB_NAME } from './constants'

// import express from 'express'
// const app = express()

// ( async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)

//         app.on("error", (err) => {
//             console.log("error : ", err)
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`app is listen on port : ${process.env.PORT}`)
//         })
//     }catch(err){
//         console.log("error : ", err)
//     }
// })
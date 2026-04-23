import dotenv from 'dotenv'
import connectDB from './db/db.js'

dotenv.config()


connectDB()
.then( ()=> {
    app.on("error", (err) => {
        console.log("Error: ", err)
    })

    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("Error: ", err)
})







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
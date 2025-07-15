import express from 'express'
import morgan from 'morgan'
import chalk from 'chalk'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import path from 'path'
import empRouter from './routes/empRouter.js'

//create express app 
const app = express() 

//load application- env variable
dotenv.config({path:'./config/prod.config'})
let port =process.env.PORT;
let host=process.env.HOST;
let db_url=process.env.MONGO_DB_LOCAL_URL;

/* console.log(port)
console.log(host)
console.log(db_url) */

//read form data or post body data
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//add http logger middleware
app.use(morgan('tiny'))

//Forword req to employee router
app.use("/emp",empRouter)

//Appliation Root req
/*
API URL: http://127.0.0.1:8080/
*/
app.get("/",(req,resp)=>{
    return resp.json({"msg":"Application Root Request"});
})
//Mongo DB - connection code
mongoose.connect(db_url)
        .then(()=>{
            console.log("MongoDB Connection Success!")
        })
        .catch((err)=>{
            console.log(err)
            process.exit(1)
        })

app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log(`Server Running.. http://${host}:${port}/`)
})
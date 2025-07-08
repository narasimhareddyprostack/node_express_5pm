import express from 'express'
import morgan from 'morgan'
const app= express()
import empRouter from './routes/empRouter.js'
let port=8080
let host='127.0.0.1'
//HTTP Logger middleware
app.use(morgan('tiny'))
  // Middleware for parsing URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Middleware for parsing JSON data (if your form also sends JSON)
app.use(express.json());

/*
usage  : Application Root Request
API URL: http://127.0.0.1:8080/
Method Type:GET
Required Field:None
Access Type:Public
*/
app.get("/",(req,resp)=>{
    return resp.json({"message":"Application Root Request"})
})

//emp Routing 
app.use("/emp",empRouter)


app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log(`Server is Running.. http://${host}:${port}/`)
})
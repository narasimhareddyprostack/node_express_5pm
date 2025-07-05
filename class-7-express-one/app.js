import express from "express";
let app = express()
let port=8080
let host='127.0.0.1'
/*
API Name: root request
API URL: http://127.0.0.1:8080/ 
Method Type:GET
Req Fields:None
Access Type:Public
*/
app.get("/",(req,resp)=>{
    resp.send("Chennai Express!")
})

/*
API Name: User request
API URL: http://127.0.0.1:8080/user 
Method Type:GET
Req Fields:None
Access Type:Public
*/
app.get("/user",(req,resp)=>{
    resp.send("User Request")
})
app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log(`Server is Runing http://${host}:${port}/`)
})
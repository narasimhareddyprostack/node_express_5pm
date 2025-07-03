import http from 'http'
import fs from 'fs'
import path from 'path'
let host='127.0.0.4'
let port=8080
let server =http.createServer((req,resp)=>{
    //business logic
    if(req.url==='/'){
        fs.readFile(path.join(process.cwd(),"ui","html","index.html"),'utf-8',(err,data)=>{
        if(err){
            console.log(`Error while sending respose.. ${err.message}`)
        }
        else{
            resp.end(data)
        }
    })
    }
    if(req.url ==='/about'){
        fs.readFile(path.join(process.cwd(),"ui","html","about.html"),'utf-8',(err,data)=>{
        if(err){
            console.log(`Error while sending respose.. ${err.message}`)
        }
        else{
            resp.end(data)
        }
    })
    }
     if(req.url ==='/services'){
        fs.readFile(path.join(process.cwd(),"ui","html","services.html"),'utf-8',(err,data)=>{
        if(err){
            console.log(`Error while sending respose.. ${err.message}`)
        }
        else{
            resp.end(data)
        }
    })
    }
     if(req.url ==='/contact'){
        fs.readFile(path.join(process.cwd(),"ui","html","contact.html"),'utf-8',(err,data)=>{
        if(err){
            console.log(`Error while sending respose.. ${err.message}`)
        }
        else{
            resp.end(data)
        }
    })
    }
})   
server.listen(port,host,(err)=>{
    if(err) throw err 
    console.log(`Server is Running... http://${host}:${port}/`)
})
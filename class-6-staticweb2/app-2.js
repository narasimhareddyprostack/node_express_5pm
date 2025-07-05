import http from 'http'
import fs from 'fs'
import path from 'path'

let server = http.createServer((req,resp)=>{
    resp.end("Welcome to Node JS")
})
server.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err 
    console.log(`Server Running on http://${'127.0.0.1'}:${8080}/`)
})
import http from 'http'
import fs from 'fs'

let server=http.createServer((req,resp)=>{
    fs.readFile('index.html','utf-8',(err,data)=>{
        if(err) throw err 
        resp.end(data)
    })
})
let port = 8080
server.listen(port,(err)=>{
    if(err) throw err 
    console.log(`Server is running... http://localhost:${port}/`)
})
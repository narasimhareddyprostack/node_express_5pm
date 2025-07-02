import http from 'http'

let server = http.createServer((request,response)=>{
    response.end("Welcome to Node JS App")
})
let port = 8080;
server.listen(port,(err)=>{
    if(err) throw err 
    console.log(`Server is Running: http://localhost:${port}/`)
})
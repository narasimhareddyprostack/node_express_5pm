import fs from 'fs'
//fs.readFile('abc.txt','utf-8',()=>{})
//             filepath,encodeing,callback

fs.readFile('ab.txt','utf-8',(err,data)=>{
    if(err) throw err
    console.log(data)
})
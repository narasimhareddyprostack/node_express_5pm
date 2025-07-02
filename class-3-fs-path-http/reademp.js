import fs from 'fs'
import path from 'path'
fs.readFile(path.join(process.cwd(),"master","data","emp","emp.json"),
    'utf-8',
    (err,data)=>{
    if(err){
        console.log(`Error while reading file: ${err.message}`)
    }
    else{
        let employees=JSON.parse(data)
        for(let employee of employees){
            console.log(employee.ename)
        }
    }

})
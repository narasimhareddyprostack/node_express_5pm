import fs from 'fs'
fs.readFile('data/emp/emp.json','utf-8',(err,data)=>{
    if(err){
        console.log("Error while reading file",err.message)
    }
    else{
        let employees=JSON.parse(data)
        for(let emp of employees){
            console.log(emp.ename);
        }
    }
})
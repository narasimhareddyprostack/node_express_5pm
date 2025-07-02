import fs from 'fs'
fs.readFile('emp.json','utf-8',(err,data)=>{
    if(err) throw err 
    //console.log(data)
    console.log(typeof data) //string
    let employees=JSON.parse(data)
    console.log(employees.length)  //100
    console.log(typeof employees) //Object

    for(let emp of  employees){
        console.log(emp.ename)
    }
})
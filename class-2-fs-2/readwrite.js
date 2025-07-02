import fs from 'fs'
fs.readFile('emp.json','utf-8',(err,data)=>{
    if(err) throw err 

    let male_Employees=[]
    let employees=JSON.parse(data)

    for(let emp of employees){
        if(emp.gender ==='Male'){
            male_Employees.push(emp)
        }
    }
    fs.writeFile('male.json',JSON.stringify(male_Employees),(err)=>{
        if(err) throw err 
        console.log("New File Created!")
    })
})
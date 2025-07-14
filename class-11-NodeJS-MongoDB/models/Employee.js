import mongoose from "mongoose";

const empSchema = mongoose.Schema({
    eid:{
        "type":Number,
        "required":true,
        },
    ename:{
         "type":String,
        "required":true,
    },
    esal:{
         "type":Number,
         "required":true,
    },
    gender:{
         "type":String,
         "required":true,
    }
})
const emp_model = mongoose.model("Employee",empSchema);
export default emp_model;
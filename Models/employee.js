const mongoose= require("mongoose");

let employeeSchema=new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    department:String,
    salary:Number,
    hireDate:{ type: Date, default: Date.now }
})

module.exports=mongoose.model("Employee",employeeSchema)
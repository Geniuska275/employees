const mongoose= require("mongoose");

let employeeSchema=new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    department:String,
    salary:Number,
    hireDate:Date
})

module.exports=mongoose.model("Employee",employeeSchema)
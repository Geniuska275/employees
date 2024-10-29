const express=require("express");
const Router=express.Router();
const Employee=require("../Models/employee")
Router.get("/employees",(req,res)=>{
  res.send("welcome to employee routes")
})

Router.post("/employees/new",(req,res)=>{
    let employee=new Employee(req.body)
    employee.save().then(employee=>res.send(employee)).catch(err=>res.send(err))
})

module.exports=Router;
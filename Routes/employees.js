const express=require("express");
const Router=express.Router();
const Employee=require("../Models/employee")
Router.get("/employees",(req,res)=>{
  res.send("welcome to employee routes")
})

Router.post("/employees/new",(req,res)=>{
    console.log(req.body)
    let newemployee={
        name:req.body.name,
        age:req.body.age,
        email:req.body.email,
        department:req.body.department,
        salary:req.body.salary,
        hireDate:req.body.hireDate
    }
    Employee.create(newemployee).then(employee=>{
        res.send(employee)
    }).catch(err=>{
        res.send(err)
    })
    
})

module.exports=Router;
const express=require("express");
const Router=express.Router();
const Employee=require("../Models/employee")
Router.get("/employees",(req,res)=>{
   Employee.find({}).then(employees=>{
       res.send(employees)
   }).catch(err=>{
       res.send(err)
   })
})

Router.get("/employees/Search",(req,res)=>{
    
    Employee.find({name:req.query.name}).then(employees=>{
        res.send(employees)
    }).catch(err=>{
        res.send(err)
    })
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


Router.put("Edit/:id",(req,res)=>{
    console.log(req.params.id)
    Employee.findByIdAndUpdate(req.params.id,req.body).then(employee=>{
        res.send(employee)
    }).catch(err=>{
        res.send(err)
    })
})


module.exports=Router;
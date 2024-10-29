const express=require("express");

const app=express()

const mongoose=require("mongoose");
const BodyParser=require("body-parser")
// connecting to database
mongoose.connect("mongodb+srv://aigbojie2020:wPXsq2r2yRUHcHrh@cluster0.auvv9.mongodb.net/",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
  
})
const port=3500;
const EmployeesRoutes=require("./Routes/employees");


app.get("/",(req,res)=>{
    res.send("welcome to backend")
})

app.get("/contact",(req,res)=>{
    res.send("<h1>Contact</h1>")
})
app.use(EmployeesRoutes)
app.use(BodyParser.urlencoded({extended:true}))
app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})
// mongodb+srv://aigbojie2020:wPXsq2r2yRUHcHrh@cluster0.auvv9.mongodb.net/
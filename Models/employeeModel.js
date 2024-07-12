const mongoose=require('mongoose')

const employeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phonenumber:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true

    }

   
})
const employees=mongoose.model("employees",employeeSchema)
module.exports=employees
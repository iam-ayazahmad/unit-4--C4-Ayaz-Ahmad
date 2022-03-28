const express=require("express")
const mongoose=require("mongoose")
const app=express()

const connect=()=>{
    return mongoose.connect('mongodb+srv://Ayaz_Ahmad:AYAZisLUCKY@cluster0.sxbry.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
}

const Userschema=new mongoose.Schema({
    firstName:{type: String, required:true},
lastName:{type: String},
email:{type:String, required:true},
password:{type: String, required:true}
},
{timestamps:true}
)



const UserModel=mongoose.model("usermodel",Userschema)

const todoSchema=new mongoose.Schema({
    title:{type:String,required:true},
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserModel",
        required:true
    }
},{
    timestamps:true
})

const todoModel=mongoose.model(todomodel ,todoSchema)

app.post("/register",async(req,res)=>{

    try{
        const user=await UserModel.create(req.body)
        return res.status(200).send(user)
    }
    catch(err){
        return res.status(500).send(arr.message)
    }
    
})

app.post("/login",async(req,res)=>{

    try{
        const user=await UserModel.create(req.body)
        return res.status(200).send(user)
    }
    catch(err){
        return res.status(500).send(arr.message)
    }
    
})
app.get("/todos",async(req,res)=>{
    try{
       

    }
    catch{
        
    }
})
app.post("/todos",async(req,res)=>{
    try{
        const user=await todoModel.create(req.body)
        return res.status(200).send(user)

    }
    catch{
        return res.status(500).send(arr.message)

        
    }
})
app.get("/todos/:id",async(req,res)=>{
    try{

    }
    catch{
        
    }
})
app.patch("/todos/:id",async(req,res)=>{
    try{

    }
    catch{
        
    }
})
app.delete("/todos/:id",async(req,res)=>{
    try{

    }
    catch{
        
    }
})



app.listen(6500,async()=>{
    try{
        await UserModel()
        console.log("it's working")
    }
    catch{
        console.log("it's not working")
    }
})




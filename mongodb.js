const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/DispensaryDb")
.then(()=>{
    console.log("DB connected");
})
.catch(()=>{
    console.log("DB failed to connect");
})

const LogInSchema = new mongoose.Schema({

    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    mobileNo:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profilePicture: {
        type: String, 
        required: false
    }
})

const collection = new mongoose.model("LogInCollection",LogInSchema)

module.exports = collection
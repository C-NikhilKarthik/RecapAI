const env = require('./env');

const mongoose=require('mongoose')
const connectDB=async()=>{
    try{
        
        await mongoose.connect(env.MONGODB_URI)
        console.log("connected to database")
    }
    catch(err){
        console.log(err)
    }
}

module.exports=connectDB
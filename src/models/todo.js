const mongoose=require('mongoose')
const TodoSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true,
        trim:true
    },
    completed:{
        type:Boolean,
        required:true,
        trim:true
    }
}) 
module.exports=mongoose.model("Todo",TodoSchema)
// userSchema.pre('save',async function(){
//     const user=this;
    
// })
import mongoose from "mongoose"
const userShema = new mongoose.Schema({
    name : {type:String,required:true},
    email :{type:String,required:true,unique:true},
    password :{type:String,required:true},
    cartData :{type:String,default:{}}
},{minimize:false})
const userModel = mongoose.model.user || mongoose.model("user",userSchema);
export default userModel;
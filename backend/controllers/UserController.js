import userModel from "../models/UserModel";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"
import { json } from './../../frontend/node_modules/@remix-run/router/utils';
const loginUser = async (req,res) =>{
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email});
        if(!user){
            return res.Json({success:false,message:"user Does not exist"})
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.Json({success:false,message:"Invaild credentials"})
        }
        const token = createToken(user._id);
        res.Json({success: true,token})
    } catch (error) {
        console.log(error);
        res.Json({success:false,message:"Error"})
        
    }

}
const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}
const registerUser = async (req,res)=>{
    const{name,password,email}=req.body;
    try{
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false, message:"User already exists"})
        }
        if(!validator.isEmail(email)){
            return res.Json({success:false, message:"Please enter vaild email"})
        }
        if(password.length<8){
            return res.Json({success:false,message:"please enter a strong password"})
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword =await bcrypt.hash(password,salt)
        const newUser = new userModel({
            name : name,
            email : email,
            password : hashedPassword

        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.Json({success:true,token})



    }catch(error){
        console.log(error)
        res.Json({success:false,message:""})

    }
}
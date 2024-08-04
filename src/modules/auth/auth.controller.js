import userModel from "../../../DB/models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';





export const Register = async(req,res)=>{
    try{
    const {name,email,password}=req.body;
    const passwordHashed= await bcrypt.hash(password,parseInt(process.env.SALTROUND))
    //1-create:
    const user = await userModel.create({userName:name,email,password:passwordHashed});
/*2-newModel:
     const user = new userModel({userName:name,email,password:passwordHashed})
     await user.save();*/
/* 3- insertMany
     const user= await userModel.insertMany({userName:name,email,password:passwordHashed});*/
    return res.status(201).json({message:"success",user})
    }catch(error){
        return res.status(500).json({messsag:"catch error",error})
    }
}

export const Login = async(req,res)=>{
    const {email,password}=req.body;
    const user= await userModel.findOne({email});
    if(!user){
        return res.status(400).json({message:"email not found"})
    }
    const check = await bcrypt.compareSync(password,user.password);
    if(!check){
        return res.status(400).json({message:"invalid password"})
 
    }
    const token= jwt.sign({id:user._id},'LoginSig123');
    return res.status(200).json({message:"success",token})
}


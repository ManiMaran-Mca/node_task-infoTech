import User from "../model/user.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

let saltRounds=10

export const reg=async (req,res)=>{
    let email=req.body.email
    let exUser=await User.findOne({email:email})
    if(exUser){
        res.send("email exists please login")
    }
    else{
        try {
            bcrypt.hash(req.body.password,saltRounds,async(err,hash)=>{
                let register=new User({
                    name:req.body.name,
                    email:email,
                    password:hash
                })
                try {
                    let result =await register.save()
                    res.send("register success")
                } catch (error) {
                    res.send(error.message);
                }
            })
        } catch (error) {
            console.log(error.message);
        }
        
    }    
}

export const login=async(req,res)=>{
    let email=req.body.email
    let password=req.body.password
    let foundUser=await User.findOne({email:email})
    if(foundUser){
        bcrypt.compare(password,foundUser.password,(err,result)=>{
            if(result){
                const token=jwt.sign({_id:foundUser._id,isAdmin:foundUser.isAdmin},process.env.JWT)
                res.header("token",token).send({message:"login",token:token})
            }else{
                res.send("password wrong")
            }
        })
        
    }else{
        res.send("email is unavailable...please register")
    }
}

export const getAll=async(req,res)=>{
    let user=await User.find()
    res.status(200).json({data:user})
}
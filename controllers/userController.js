import {User} from '../models/userModel.js'
import asyncHandler from "express-async-handler"


// user register controller function

const userRegister = asyncHandler( async (req,res)=>{

    try {
        let {name,email,phone_number, address}=req.body

        if(!name || !email || !phone_number || !address){

            return res.status(400).send({message:"Please fill all details"})
        }


      if(!(phone_number.toString().length==10)){
        return res.status(400).send({message:"Phone number should be 10 digits long"})
      }

       let existuser= await User.findOne({email:email})
       if(existuser){
        return res.status(400).send({message:"user already exists so please login"})
       }
       let addressarray=address.split(" ")
       if(!addressarray.length==10)

       { return res.status(400).send({message:"address should be 10 words"})}
       
       let user=await User.create({
        name,
        email,
        phone_number,
        address
       })

       if(user){

        return res.status(201).json({
            name:user.name,
            email:user.email,
            phone_number:user.phone_number,
            address:user.address
        })

       }else{
        return res.status(400).send({message:"some internal error has been occured so please try again later"})
       }


    } catch (error) {
        console.log(error)
        return res.status(500).send({message:"some internal error has been occured so please try again later"})
    }

})


// user login controller function

const userLogin= asyncHandler( async (req,res)=>{

    try {
        let {phone_number}=req.body

        if( !phone_number){

            return res.status(400).send({message:"Please fill all details"})
        }


      if(!phone_number.toString().length==10){
        return res.status(400).send({message:"Phone number should be 10 digits long"})
      }

       let user= await User.findOne({phone_number:phone_number})
       if(!user){
        return res.status(400).send({message:"user does not exists so please register"})
       }
       
       

       if(user){

        return res.status(200).json({
            name:user.name,
            email:user.email,
            phone_number:user.phone_number,
            address:user.address
        })

       }else{
        return res.status(400).send({message:"some internal error has been occured so please try again later"})
       }


    } catch (error) {
        console.log(error)
        return res.status(500).send({message:"some internal error has been occured so please try again later"})
    }

})

export {userRegister,userLogin}
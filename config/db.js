import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const MongoseConnect=  (URI)=>{
    
    let connect=  mongoose.createConnection(URI)

    console.log("mongodb connected")


    return connect
}


 const BFNP=MongoseConnect(process.env.MONGO_URI)

 export {BFNP}

 

import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { router } from './routes/userRoutes.js'



dotenv.config()

const port=process.env.PORT || 5000

const app=express()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/test',(req,res)=>{
    res.send("prethiksha is very good girl")
})

app.use("/BFNP",router)


app.listen(port, () => console.log(`Server started on port ${port}`));
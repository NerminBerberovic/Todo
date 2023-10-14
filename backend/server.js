const express = require('express')
const mongoose = require('mongoose')
const collection = require('./model')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())


mongoose.connect('mongodb+srv://Nermin:Nermin@cluster0.yx5fydj.mongodb.net/TodoPrivate?retryWrites=true&w=majority')
.then(()=>{
    console.log("Database connected")
})
.catch(()=>{
    console.log('Connection failed')
})


app.get("/", cors(), async (req, res)=>{
    try{
        await collection.find()
            .then (results => {
                 res.json(results) 
            })
            .catch(error => {
                console.log(error)
            })
    }
    catch(error) {
        console.log(error)
    }
})

app.post("/add", async (req, res)=>{
    const{ text }=req.body

        try{
            await collection.create({text})

        }
        
        catch(error){
            res.json(error)
        }
    } 
)

app.post("/delete", async (req, res)=>{

    const _id = req.body
    

        try{
            await collection.findByIdAndDelete( _id )

        }
        
        catch(error){
            res.json(error)
        }
    } 
)


app.listen(8000, ()=> console.log("Server is Up and runing"))
const express = require("express")
const cors=require("cors");
const { connection } = require("./db/db");
const { noteRoute } = require("./Routes/note.routes");

const PORT = process.env.PORT || 8000

const app=express();
app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("ok")

})

app.use("/note",noteRoute)

app.listen(PORT,async()=>{
    try{
        await connection;
        console.log("mysql db connected")
    }
    catch(err){
        console.log(err)
    }
    console.log("server running")
})
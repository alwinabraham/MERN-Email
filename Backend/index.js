const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const app = express()

dotenv.config()

app.listen(4000,()=>{
    console.log("Server Connected at PORT 4000");
});

mongoose.connect("mongodb://localhost:27017/email",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("DB Connected");
}).catch((error)=>{
    console.log(error.message);
});

app.use(cors({
    origin:["http://localhost/5173"],
    method:["GET","POST"],
    credentials:true
}));

app.use(express.json());
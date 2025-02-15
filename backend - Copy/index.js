const express = require('express')
require("dotenv").config();

const mongoose= require ("mongoose")

const router= require("./routes/routes")

const cors = require('cors')

const cookieParser = require('cookie-parser')

const app = express()

app.use(cors());

app.use(cookieParser())

app.use(express.json())

app.use("/api",router)

mongoose
  .connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0.4bmfh.mongodb.net/Testing?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    
  })
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(3003,()=>{
      console.log("App is Listening on port 3003")
    })
  })
  



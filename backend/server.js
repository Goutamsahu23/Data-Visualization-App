const cors = require('cors');

const express=require('express');
const app=express();

app.use(cors());

require('dotenv').config();
const dataRouts=require('./routes/dataRoutes')

const PORT=process.env.PORT || 5000

// middleware
app.use(express.json());

// api routes
app.use("/api/v1",dataRouts);


// db connection
const dbConnect=require('./config/db')
dbConnect();



// server running
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})
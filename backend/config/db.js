const mongoose=require('mongoose');
require('dotenv').config();


const dbConnect=()=>{
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{console.log("database connection established.")})
    .catch((e)=>{
        console.log(e.message);
        process.exit(1);
    })
}

module.exports=dbConnect;
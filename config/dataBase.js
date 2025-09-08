const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
    //Since MongoDB Node.js driver v4.0+, you don’t need those options anymore.    
        // useNewUrlParser:true,
        // useUnifiedTopology:true,
    })
    .then(()=> console.log("DB is connected"))
    .catch((error)=>{
        console.log("issue a gya");
        console.error(error.message);
        process.exit(1);
    });
}
module.exports = dbConnect;
const mongoose=require("mongoose");

const dbConnection= ()=>mongoose.connect('mongodb://localhost:27017/task1').then((result)=>{
console.log("dbConnected");
})
.catch((error)=>{
    console.log(error)
})
module.exports=dbConnection;

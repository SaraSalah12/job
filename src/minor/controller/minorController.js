const Minor = require("../model/minorModel")

const getAllMinor= async(req,res)=>{
try{
const data= await Minor.find({});
res.json({message:"success", data});
} catch(err){
    res.json({message:"error",err});
}
};
module.exports={getAllMinor}
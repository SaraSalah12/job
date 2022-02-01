const Major = require("../model/majorModel")

const getAllMajor= async(req,res)=>{
try{
const data= await Major.find({});
res.json({message:"success", data});
} catch(err){
    res.json({message:"error",err});
}
};
module.exports={getAllMajor}
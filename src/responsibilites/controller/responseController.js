const Responsibility = require("../model/responseModel")

const getAllResponsibilities= async(req,res)=>{
try{
const data= await Responsibility.find({});
res.json({message:"success", data});
} catch(err){
    res.json({message:"error",err});
}
};
module.exports={getAllResponsibilities}
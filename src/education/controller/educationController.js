const Education = require("../model/educationModel")

const getAllEducation= async(req,res)=>{
try{
const data= await Education.find({});
res.json({message:"success", data});
} catch(err){
    res.json({message:"error",err});
}
};
module.exports={getAllEducation}
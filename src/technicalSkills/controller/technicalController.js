const TechnicalSkill = require("../model/technicalModel")

const getAllTechnicalSkills= async(req,res)=>{
try{
const data= await TechnicalSkill.find({});
res.json({message:"success", data});
} catch(err){
    res.json({message:"error",err});
}
};
module.exports={getAllTechnicalSkills}
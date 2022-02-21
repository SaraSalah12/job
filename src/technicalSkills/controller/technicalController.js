const TechnicalSkill = require("../model/technicalModel")

const getAllTechnicalSkills= async(req,res)=>{
try{
const data= await TechnicalSkill.find({});
res.json({message:"success", data});
} catch(err){
    res.json({message:"error",err});
}
};
const addTechnicalSkill = async (req, res) => {
    try {
      const { technical_description,skill_tools} = req.body;
      const newTechnicalSkill = new TechnicalSkill({technical_description,skill_tools });
      const data = await newTechnicalSkill.save();
      res.json({ message: "success", data });
    } catch (err) {
      res.json({ message: "error", err });
    }
  };
  const updateTechnicalSkill = async (req, res) => {
      try {
          const{id}=req.params;
        const { technical_description,skill_tools } = req.body;
        const data = await TechnicalSkill.findByIdAndUpdate({_id:id},{technical_description,skill_tools});
        res.json({ message: "success", data });
      } catch (err) {
        res.json({ message: "error", err });
      }
    };
    const deleteTechnicalSkill = async (req, res) => {
      try {
          const{id}=req.params;
        const data = await TechnicalSkill.deleteOne({_id:id});
        res.json({ message: "success", data });
      } catch (err) {
        res.json({ message: "error", err });
      }
    };
    
    const search = async (req, res) => {
      try {
          const {searchName}=req.params;
        const data = await TechnicalSkill.find({technical_description:{$regex:searchName},skill_tools:{$regex:searchName}});
        res.json({ message: "success", data });
      } catch (err) {
        res.json({ message: "error", err });
      }
    };
module.exports={getAllTechnicalSkills,deleteTechnicalSkill,search,updateTechnicalSkill,addTechnicalSkill}
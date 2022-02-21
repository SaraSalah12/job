const SoftSkill = require("../model/softModel")

const getAllSoftSkills= async(req,res)=>{
try{
const data= await SoftSkill.find({});
res.json({message:"success", data});
} catch(err){
    res.json({message:"error",err});
}
};
const addSoftSkill = async (req, res) => {
    try {
      const { soft_description} = req.body;
      const newSoftSkill = new SoftSkill({soft_description });
      const data = await newSoftSkill.save();
      res.json({ message: "success", data });
    } catch (err) {
      res.json({ message: "error", err });
    }
  };
  const updateSoftSkill = async (req, res) => {
      try {
          const{id}=req.params;
        const { soft_description } = req.body;
        const data = await SoftSkill.findByIdAndUpdate({_id:id},{soft_description});
        res.json({ message: "success", data });
      } catch (err) {
        res.json({ message: "error", err });
      }
    };
    const deleteSoftSkill = async (req, res) => {
      try {
          const{id}=req.params;
        const data = await SoftSkill.deleteOne({_id:id});
        res.json({ message: "success", data });
      } catch (err) {
        res.json({ message: "error", err });
      }
    };
    
    const search = async (req, res) => {
      try {
          const {searchName}=req.params;
        const data = await SoftSkill.find({soft_description:{$regex:searchName}});
        res.json({ message: "success", data });
      } catch (err) {
        res.json({ message: "error", err });
      }
    };
module.exports={getAllSoftSkills,addSoftSkill,updateSoftSkill,deleteSoftSkill,search}
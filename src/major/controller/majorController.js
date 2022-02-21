const Major = require("../model/majorModel")

const getAllMajor= async(req,res)=>{
try{
const data= await Major.find({});
res.json({message:"success", data});
} catch(err){
    res.json({message:"error",err});
}
};
const addMajor = async (req, res) => {
    try {
      const { major_description} = req.body;
      const newMajor = new Major({major_description });
      const data = await newMajor.save();
      res.json({ message: "success", data });
    } catch (err) {
      res.json({ message: "error", err });
    }
  };
  const updateMajor = async (req, res) => {
      try {
          const{id}=req.params;
        const { major_description } = req.body;
        const data = await Major.findByIdAndUpdate({_id:id},{major_description});
        res.json({ message: "success", data });
      } catch (err) {
        res.json({ message: "error", err });
      }
    };
    const deleteMajor = async (req, res) => {
      try {
          const{id}=req.params;
        const data = await Major.deleteOne({_id:id});
        res.json({ message: "success", data });
      } catch (err) {
        res.json({ message: "error", err });
      }
    };
    
    const search = async (req, res) => {
      try {
          const {searchName}=req.params;
        const data = await Major.find({major_description:{$regex:searchName}});
        res.json({ message: "success", data });
      } catch (err) {
        res.json({ message: "error", err });
      }
    };
module.exports={getAllMajor,addMajor,updateMajor,deleteMajor,search}
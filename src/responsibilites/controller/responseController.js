const Responsibility = require("../model/responseModel")

const getAllResponsibilities= async(req,res)=>{
try{
const data= await Responsibility.find({});
res.json({message:"success", data});
} catch(err){
    res.json({message:"error",err});
}
};
const addResponsibility = async (req, res) => {
    try {
      const { responsibility_description} = req.body;
      const newResponsibility = new Responsibility({responsibility_description });
      const data = await newResponsibility.save();
      res.json({ message: "success", data });
    } catch (err) {
      res.json({ message: "error", err });
    }
  };
  const updateResponsibility = async (req, res) => {
      try {
          const{id}=req.params;
        const { responsibility_description } = req.body;
        const data = await Responsibility.findByIdAndUpdate({_id:id},{responsibility_description});
        res.json({ message: "success", data });
      } catch (err) {
        res.json({ message: "error", err });
      }
    };
    const deleteResponsibility = async (req, res) => {
      try {
          const{id}=req.params;
        const data = await Responsibility.deleteOne({_id:id});
        res.json({ message: "success", data });
      } catch (err) {
        res.json({ message: "error", err });
      }
    };
    
    const search = async (req, res) => {
      try {
          const {searchName}=req.params;
        const data = await Responsibility.find({responsibility_description:{$regex:searchName}});
        res.json({ message: "success", data });
      } catch (err) {
        res.json({ message: "error", err });
      }
    };
module.exports={getAllResponsibilities,addResponsibility,updateResponsibility,deleteResponsibility,search}
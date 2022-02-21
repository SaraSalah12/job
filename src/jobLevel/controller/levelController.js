const Level = require("../model/levelModel")

const getAllLevels= async(req,res)=>{
try{
const data= await Level.find({});
res.json({message:"success", data});
} catch(err){
    res.json({message:"error",err});
}
};
const addLevels = async (req, res) => {
    try {
      const { next_job,experience,quality_skill,jobLevel} = req.body;
      const newLevel = new Level({ next_job,experience,quality_skill,jobLevel });
      const data = await newLevel.save();
      console.log(data);
      res.json({ message: "success", data });
    } catch (err) {
      res.json({ message: "error", err });
    }
  };

  const updateLevels = async (req, res) => {
      try {
          const{id}=req.params;
        const { next_job,experience,quality_skill,jobLevel } = req.body;
        const data = await Level.findByIdAndUpdate({_id:id},{next_job,experience,quality_skill,jobLevel});
        res.json({ message: "success", data });
      } catch (err) {
        res.json({ message: "error", err });
      }
    };
    const deleteLevels = async (req, res) => {
      try {
          const{id}=req.params;
        const data = await Level.deleteOne({_id:id});
        res.json({ message: "success", data });
      } catch (err) {
        res.json({ message: "error", err });
      }
    };
    const search = async (req, res) => {
      try {
          const {searchName}=req.params;
        const data = await Level.find({jobLevel:{$regex:searchName},experience:{$regex:searchName},quality_skill:{$regex:searchName}});
        res.json({ message: "success", data });
      } catch (err) {
        res.json({ message: "error", err });
      }
    };

module.exports={getAllLevels,addLevels,updateLevels,deleteLevels,search}
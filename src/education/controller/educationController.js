const Education = require("../model/educationModel")

const getAllEducation= async(req,res)=>{
try{
const data= await Education.find({});
res.json({message:"success", data});
} catch(err){
    res.json({message:"error",err});
}
};

const addEducation = async (req, res) => {
    try {
     
      const newEducation=new Education(req,body);
      const data=await newEducation.save();
      res.json({message:"success",data:newEducation})
    } catch (err) {
      res.json({ message: "error", err });
    }
  };
  // try {
  //   const { level,Minor} = req.body;
  //   const arr=[];
  //   Minor.forEach(element => {
  //      const obj={Minor:Object.values(element)[0]};
  //      arr.push(obj);
  //   });
  //   const newEducation=new Education({level});
  //   newEducation.Minor.push(...arr);
  //   const data=await newEducation.save();
  //   res.json({message:"success",data:newEducation})
  // } catch (err) {
  //   res.json({ message: "error", err });
  // }
  const updateEducation = async (req, res) => {
      try {
          const{id}=req.params;
        const { level,minor } = req.body;
        const data = await Education.findByIdAndUpdate({_id:id},{level,minor});
        res.json({ message: "success", data });
      } catch (err) {
        res.json({ message: "error", err });
      }
    };
    const deleteEducation = async (req, res) => {
      try {
          const{id}=req.params;
        const data = await Education.deleteOne({_id:id});
        res.json({ message: "success", data });
      } catch (err) {
        res.json({ message: "error", err });
      }
    };
    const search = async (req, res) => {
      try {
          const {searchName}=req.params;
        const data = await Education.find({level:{$regex:searchName}});
        res.json({ message: "success", data });
      } catch (err) {
        res.json({ message: "error", err });
      }
    };

module.exports={getAllEducation,addEducation,updateEducation,deleteEducation,search}
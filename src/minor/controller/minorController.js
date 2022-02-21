const Minor = require("../model/minorModel")

const getAllMinor= async(req,res)=>{
try{
const data= await Minor.find({});
res.json({message:"success", data});
} catch(err){
    res.json({message:"error",err});
}
};
const addMinor = async (req, res) => {
  try {
   
    const newMinor=new Minor (req.body);
    const data=await newEducation.save();
    res.json({message:"success",data:newMinor})
  } catch (err) {
    res.json({ message: "error", err });
  }
};
  //   try {
  //     const { minor_description,Major} = req.body;
  //     const arr=[];
  //     Major.forEach(element => {
  //        const obj={Major:Object.values(element)[0]};
  //        arr.push(obj);
  //     });
  //     const newMinor=new Minor ({minor_description});
  //     newMinor.major.push(...arr);
  //     const data=await newEducation.save();
  //     res.json({message:"success",data:newMinor})
  //   } catch (err) {
  //     res.json({ message: "error", err });
  //   }
  // };
  
  const updateMinor = async (req, res) => {
      try {
          const{id}=req.params;
        const { minor_description,major } = req.body;
        const data = await Minor.findByIdAndUpdate({_id:id},{minor_description,major});
        res.json({ message: "success", data });
      } catch (err) {
        res.json({ message: "error", err });
      }
    };
    const deleteMinor= async (req, res) => {
      try {
          const{id}=req.params;
        const data = await Minor.deleteOne({_id:id});
        res.json({ message: "success", data });
      } catch (err) {
        res.json({ message: "error", err });
      }
    };
    const search = async (req, res) => {
      try {
          const {searchName}=req.params;
        const data = await Minor.find({minor_description:{$regex:searchName}});
        res.json({ message: "success", data });
      } catch (err) {
        res.json({ message: "error", err });
      }
    };

module.exports={getAllMinor,addMinor,updateMinor,deleteMinor,search}
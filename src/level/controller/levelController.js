const Level = require("../model/levelModel")

const getAllLevels= async(req,res)=>{
try{
const data= await Level.find({});
res.json({message:"success", data});
} catch(err){
    res.json({message:"error",err});
}
};
module.exports={getAllLevels}
const Job = require("../model/jobModel")

const getAllJobs= async(req,res)=>{
try{
const data= await Job.find({});
res.json({message:"success", data});
} catch(err){
    res.json({message:"error",err});
}
};

const addJobs = async (req, res) => {
  
    try {
      const newJob=new Job(req.body);
      const data=await newJob.save();
      res.json({message:"success",data:newJob});
    } catch (err) {
      res.json({ message: "error", err });
    }
  };

       //const {job_title,job_description,next_job,technicalSkill,softSkill,responsibility,Education,jobLevel}=req.body;
       // const arr=[];
       // const arr1=[];
       // const arr2=[];
       // const arr3=[];
       // const arr4=[];
      // technicalSkill.forEach(element => {
      //   console.log(element);
      //   const obj={technical_code:Object.values(element)[0],skillLevel:Object.values(element)[1]};
      //   console.log(obj)
      //   arr.push(obj);
      //   console.log(arr)
      // });
      // softSkill.forEach(element => {
      //   console.log(element);
      //   const obj1={softSkill:Object.values(element)[0]};
      //   console.log(obj1)
      //   arr1.push(obj1);
      // });
      // responsibility.forEach(element => {
      //   console.log(element);
      //   const obj2={responsibility:Object.values(element)[0]};
      //   console.log(obj2)
      //   arr2.push(obj2);
      // });
      // Education.forEach(element => {
      //   console.log(element);
      //   const obj3={Education:Object.values(element)[0]};
      //   console.log(obj3)
      //   arr3.push(obj3);
      // });
      // jobLevel.forEach(element => {
      //   console.log(element);
      //   const obj4={jobLevel:Object.values(element)[0]};
      //   console.log(obj4)
      //   arr3.push(obj4);
      //});

       
        // newJob.technicalSkills.push(...arr);
        // newJob.softSkills.push(...arr1);
        // newJob.responsibilites.push(...arr2);
        // newJob.education.push(...arr3);
        // newJob.jobLevels.push(...arr4);
      
    
  const updateJobs = async (req, res) => {
      try {
          const{id}=req.params;
        const { job_title,job_description,next_job,technicalSkills,softSkills,responsibilites,education,jobLevels } = req.body;
        const data = await Job.findByIdAndUpdate({_id:id},{job_title,job_description,next_job,technicalSkills,softSkills,responsibilites,education,jobLevels});
        res.json({ message: "success", data });
      } catch (err) {
        res.json({ message: "error", err });
      }
    };
    const deleteJobs = async (req, res) => {
      try {
          const{id}=req.params;
        const data = await Job.deleteOne({_id:id});
        res.json({ message: "success", data });
      } catch (err) {
        res.json({ message: "error", err });
      }
    };
    const search = async (req, res) => {
      try {
          const {searchName}=req.params;
        const data = await Job.find({job_title:{$regex:searchName}});
        res.json({ message: "success", data });
      } catch (err) {
        res.json({ message: "error", err });
      }
    };

module.exports={getAllJobs,addJobs,updateJobs,deleteJobs,search
}
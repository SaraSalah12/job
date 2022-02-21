

const {Schema} =require("mongoose");
const jobSchema= new Schema({
job_title:String,
job_description:String,
next_job:{type:Schema.Types.ObjectId,ref:"job"},//create during insert //collection to link jobs together//update
technicalSkills:[{technical_code:{type:Number},skillLevel:String}],
softSkills:[{type:Schema.Types.ObjectId,ref:"softSkill"}],
responsibilites:[{type:Schema.Types.ObjectId,ref:"responsibility"}],
education:[{type:Schema.Types.ObjectId,ref:"education"}],
jobLevels:[{type:Schema.Types.ObjectId,ref:"level"}]//نربطها هنا و لا نربطها ف ال jobLevel
},
{
    timeStamps: true
}
);

module.exports=jobSchema;
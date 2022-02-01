const {Schema} =require("mongoose");
const levelSchema= new Schema({
next_job:String,
experience:String,
quality_skill:String,
job_code:Number

},
{
    timeStamps: true
}
);

module.exports=levelSchema;
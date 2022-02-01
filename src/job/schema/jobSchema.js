

const {Schema} =require("mongoose");
const jobSchema= new Schema({
job_code:Number,
job_title:String,
job_description:String,

},
{
    timeStamps: true
}
);

module.exports=jobSchema;
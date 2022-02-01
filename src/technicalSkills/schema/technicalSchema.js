const {Schema} =require("mongoose");
const technicalSchema= new Schema({
technical_code:Number,
technical_description:String,
skill_tools:String,

},
{
    timeStamps: true
}
);

module.exports=technicalSchema;
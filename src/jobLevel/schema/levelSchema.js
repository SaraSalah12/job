const {Schema} =require("mongoose");
const levelSchema= new Schema({
jobLevel:String,
experience:String,
quality:String,
nextLevel:{type:Schema.Types.ObjectId,ref:"level"},

},
{
    timeStamps: true
}
);

module.exports=levelSchema;
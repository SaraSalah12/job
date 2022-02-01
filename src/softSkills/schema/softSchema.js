const {Schema} =require("mongoose");
const softSchema= new Schema({
soft_code:Number,
soft_description:String,

},
{
    timeStamps: true
}
);

module.exports=softSchema;
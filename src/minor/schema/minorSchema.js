const {Schema} =require("mongoose");
const minorSchema= new Schema({
minor_code:Number,
minor_description:String,

},
{
    timeStamps: true
}
);

module.exports=minorSchema;
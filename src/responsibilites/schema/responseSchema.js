const {Schema} =require("mongoose");
const responseSchema= new Schema({
responsibility_code:Number,
responsibility_description:String,

},
{
    timeStamps: true
}
);

module.exports=responseSchema;
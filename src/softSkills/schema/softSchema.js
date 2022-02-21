const {Schema} =require("mongoose");
const softSchema= new Schema({
soft_description:String,

},
{
    timeStamps: true
}
);

module.exports=softSchema;
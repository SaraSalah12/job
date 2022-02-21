const {Schema} =require("mongoose");
const majorSchema= new Schema({
major_description:String,

},
{
    timeStamps: true
}
);

module.exports=majorSchema;
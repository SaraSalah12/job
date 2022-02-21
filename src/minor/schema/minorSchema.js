const {Schema} =require("mongoose");
const minorSchema= new Schema({
minor_description:String,
major:[{type:Schema.Types.ObjectId,ref:"major"}]

},
{
    timeStamps: true
}
);

module.exports=minorSchema;
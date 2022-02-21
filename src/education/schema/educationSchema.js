const {Schema} =require("mongoose");
const eduSchema= new Schema({
level:String,
minor:[{type:Schema.Types.ObjectId,ref:"minor"}]
},
{
    timeStamps: true
}
);

module.exports=eduSchema;
const {Schema} =require("mongoose");
const eduSchema= new Schema({
education_code:Number,
level:String,
},
{
    timeStamps: true
}
);

module.exports=eduSchema;
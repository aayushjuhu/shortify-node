const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    redirectURL:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    qr:{
        type:String,
        required:true,
    },
})

const urlModel=mongoose.model("url",urlSchema);

module.exports=urlModel;
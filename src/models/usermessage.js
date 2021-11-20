const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3,
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        minLength:10
    },
    date:{
        type:Date,
        default:Date.now
    }
})

// creating mongoose.Collection

const User = mongoose.model("User", userSchema);

module.exports = User;

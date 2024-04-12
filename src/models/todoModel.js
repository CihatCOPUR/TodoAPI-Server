"use strict"
/*
    TODO API MODELS
*/

const mongoose= require('mongoose');

const todoSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    isDone:{
        type:Boolean,
        default:false
    }
},{
    collection:'todo',
    timestamps:true
});

module.exports={
    BlogPost:  mongoose.model('todo',todoSchema)

}
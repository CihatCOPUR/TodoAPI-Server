"use strict"
/* ====================================================== */
/*                     TODO API CONTROLLERS               */
/* ====================================================== */

require("express-async-errors")

const { todoPost}=require("../models/todoModel");


module.exports.todoPost={

    list: async(req,res)=>{
        const data=await todoPost.find()
        res.status(200).send({
            error:false,
            data:data

        })

    },
    create: async(req,res)=>{
        

        const data=await todoPost.create(req.body)
        res.status(201).send({
            error:false,
            body:req.body,
            data:data

        })

    },
    read: async(req,res)=>{
        const data=await todoPost.find({_id:req.params.postId})
        res.status(202).send({
            error:false,
            data:data 

        })

    },
    update: async(req,res)=>{
        const data=await todoPost.updateOne({_id:req.params.postId},req.body)
        const newdata=await todoPost.find({_id:req.params.postId})
        res.status(202).send({
            error:false,
            body:req.body,
            data:data, // info about update
            // güncel veriyi istiyorsan tekrar çağır
            newdata:newdata

        })

    },
    delete: async(req,res)=>{
        const data=await todoPost.deleteOne({_id:req.params.postId})
        // console.log(data);
        res.sendStatus((data.deletedCount>=1)? 204:404)
        
    }
}
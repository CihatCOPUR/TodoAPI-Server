"use strict"
/* ====================================================== */
/*                     TODO API CONTROLLERS               */
/* ====================================================== */

require("express-async-errors")

const { todo}=require("../models/todoModel");


module.exports.todo={

    list: async(req,res)=>{
        const data=await todo.find()
        res.status(200).send({
            error:false,
            data:data
        })
    },
    create: async(req,res)=>{
        const data=await todo.create(req.body)
        res.status(201).send({
            error:false,
            body:req.body,
            data:data
        })
    },
    update: async(req,res)=>{
        console.log(req.params)
        const data=await todo.updateOne({_id:req.params.id},req.body)
        const newdata=await todo.find({_id:req.params.id})
        res.status(202).send({
            error:false,
            body:req.body,
            data:data, // info about update
            // güncel veriyi istiyorsan tekrar çağır
            newdata:newdata
        })
    },
    delete: async(req,res)=>{
        const data=await todo.deleteOne({_id:req.params.id})
        // console.log(data);
        res.sendStatus((data.deletedCount>=1)? 204:404)
        
    }
}
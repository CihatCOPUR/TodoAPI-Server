"use strict"
/* ====================================================== */
/*                     TODO API Routes               */
/* ====================================================== */
const router=require("express").Router()

const { route } = require("express/lib/router")

const {todoPost}=require("../controllers/todoControllers")


router.route('/posts')
    .get(todoPost.list)
    .post(todoPost.create)
    .put(todoPost.update) // put patch aynı
    .patch(todoPost.update) 
    .delete(todoPost.delete)
  

module.exports=router
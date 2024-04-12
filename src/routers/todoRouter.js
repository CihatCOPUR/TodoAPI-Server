"use strict"
/* ====================================================== */
/*                     TODO API Routes               */
/* ====================================================== */
const router = require("express").Router()

const { route } = require("express/lib/router")

const { todo } = require("../controllers/todoControllers")


router.route('/todo')
    .get(todo.list)
    .post(todo.create)
  
router.route('/todo/:id')
    .put(todo.update) // put patch aynı
    .patch(todo.update)
    .delete(todo.delete)


module.exports = router
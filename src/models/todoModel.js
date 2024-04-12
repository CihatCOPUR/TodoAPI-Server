"use strict"
/*
    TODO API MODELS
*/

const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        trim: true,

    },

    isDone: {
        type: Boolean,
        default: false
    }
}, {
    collection: 'todo',
    timestamps: true
});

module.exports = {
    todo: mongoose.model('todo', todoSchema)

}
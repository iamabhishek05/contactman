const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, " Please provide the user name "]
    },

    email: {
        type: String,
        required: [true, " Please provide the user email address"],
        unique: [true, "Email address already exists"],
    },

    password: {
        type: String,
        required: [true, " Please provide the user password"]
    },


}, { timestamps: true })


module.exports = mongoose.model("User", userSchema) 
const mongoose = require('mongoose');


const contactSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, " Please provide the contact name "]
    },

    email: {

        type: String,
        required: [true, " Please provide the contact email address"]
    },

    phone: {
        type: String,
        required: [true, " Please provide the contact phone number"]
    }
}, { timestamps: true })


module.exports = mongoose.model("Contact", contactSchema) 
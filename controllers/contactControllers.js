
const asyncHandler = require("express-async-handler")

// @desc Get all contacts
// @route GET /api/contacts
// @access public 

const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get all contacts" })
})

// @desc Create new contact
// @route POST /api/contacts
// @access public

const createContact = asyncHandler(async (req, res) => {
    console.log(req.body)
    const { name, email, body } = req.body;
    if (!name || !email || !body) {
        res.status(400);
        throw new Error(" All fileds are required ")
    }
    res.status(201).json({ message: "Create a new contact" })
})


// @desc Get a single contact
// @route Get /api/contacts/:id
// @access public

const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: ` Get contact for ${req.params.id} ` })
})


// @desc update a single contact
// @route PUT /api/contacts/:id
// @access public

const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: ` Update contact for ${req.params.id} ` })
})



// @desc update a single contact
// @route PUT /api/contacts/:id
// @access public

const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: ` Delete contact for ${req.params.id} ` })
})


module.exports = { getContacts, createContact, getContact, updateContact, deleteContact }   
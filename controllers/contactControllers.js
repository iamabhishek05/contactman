
// @desc Get all contacts
// @route GET /api/contacts
// @access public

const getContacts = (req, res) => {
    res.status(200).json({ message: "Get all contacts" })
}

// @desc Create new contact
// @route POST /api/contacts
// @access public

const createContact = (req, res) => {
    res.status(201).json({ message: "Create a new contact" })
}


// @desc Get a single contact
// @route Get /api/contacts/:id
// @access public

const getContact = (req, res) => {
    res.status(200).json({ message: ` Get contact for ${req.params.id} ` })
}


// @desc update a single contact
// @route PUT /api/contacts/:id
// @access public

const updateContact = (req, res) => {
    res.status(200).json({ message: ` Update contact for ${req.params.id} ` })
}



// @desc update a single contact
// @route PUT /api/contacts/:id
// @access public

const deleteContact = (req, res) => {
    res.status(200).json({ message: ` Delete contact for ${req.params.id} ` })
}


module.exports = { getContacts, createContact, getContact, updateContact, deleteContact }   
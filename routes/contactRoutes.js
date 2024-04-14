const express = require('express');
const router = express.Router();
const { getContacts } = require('../controllers/contactControllers')
const { createContact } = require('../controllers/contactControllers')
const { getContact } = require('../controllers/contactControllers')
const { updateContact } = require('../controllers/contactControllers')
const { deleteContact } = require('../controllers/contactControllers')



// route for all contacts & post route to create a new contact
router.route("/").get(getContacts).post(createContact)


// route for a single contact , put route to update a contact & delete route to delete a contact
router.route("/:id").get(getContact).put(updateContact).put(deleteContact)



module.exports = router;   

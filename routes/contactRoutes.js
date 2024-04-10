const express = require('express');
const router = express.Router();
const { getContacts } = require('../controllers/contactControllers')
const { createContact } = require('../controllers/contactControllers')
const { getContact } = require('../controllers/contactControllers')
const { updateContact } = require('../controllers/contactControllers')
const { deleteContact } = require('../controllers/contactControllers')



// route for all contacts 
router.route("/").get(getContacts)


// route for a single contact
router.route("/:id").get(getContact)


// post route to create a new contact

router.route("/").post(createContact)


// put route to update a contact

router.route("/:id").put(updateContact)

// delete route to delete a contact

router.route("/:id").delete(deleteContact)


module.exports = router;  

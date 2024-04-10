
const express = require('express');
const dotenv = require('dotenv').config();


const app = express()

app.use("/api/contacts", require("./routes/contactRoutes.js"))



const port = process.env.PORT || 5000



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
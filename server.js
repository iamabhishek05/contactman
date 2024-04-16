
const express = require('express');
const dotenv = require('dotenv').config();
const errorHandler = require("./middlewares/errorHandler.js")
const connectDB = require("./config/dbConnection.js")



connectDB();
const app = express()


// This is a middleware for accepting option in our body else it will show undefined 

app.use(express.json())

// This middleware is for the contactRoutes
app.use("/api/contacts", require("./routes/contactRoutes.js"))

// This middleware is for the userRoutes
app.use("/api/users", require("./routes/userRoutes.js"))


// // This middleware is for the errorHandler 
app.use(errorHandler)



const port = process.env.PORT || 5000



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
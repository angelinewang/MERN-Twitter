//Reference code written or search up connect to Express DB Mongoose
const mongoose = require('mongoose')

const DATABASE_URL = process.env.DATABASE_URL

//Function declaration
function onConnect() {
    console.log('Connected to database!')
}

//arrow function and expressions need to be called after declared, but if function declaration, it is hoisted and available before and after loads before code

mongoose.connect(DATABASE_URL, onConnect)
// Can see this message in the database to ensure database is connected
// The only file that technically runs is app.js
// Need to let app.js know we want to run this file
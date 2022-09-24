const mongoose = require('mongoose')
require('dotenv').config()
require('./config/database')

const Tweet = require('./models/Tweet')

Tweet.deleteMany({}).then(() => {
    console.log('Database connected!')
})

Tweet.insertMany([
    {
        name: 'Angeline', 
        description: 'Today is a good day'},
    {
        name: 'Ryan', 
        description: 'Today is a good day'},   
    {
        name: 'Matt', 
        description: 'Today is a good day'},  
    {
        name: 'Manohisoa', 
        description: 'Love Express!'},  
    {
        name: 'Ana', 
        description: 'Today is a good day'},           
]).then(() => {
    console.log("Data was asynchronously added")
})
//Needs to be like the schema we passed in in the model
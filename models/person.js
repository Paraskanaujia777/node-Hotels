const mongoose = require('mongoose');

// define person schema
const personSchema= new mongoose.Schema({
    name: {
        type: String ,
        required: true
    },
    age:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        enum:['waiter','chef','manager'],
        required:true
    },
    mobile:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
})


// create peson model

const Person =mongoose.model('Person' , personSchema);

module.exports= Person;
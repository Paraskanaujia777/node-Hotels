const mongoose =require('mongoose');

// Define MongoDb Connection url    
const mongoURL="mongodb://127.0.0.1:27017/hotels"

// Connect mongodb connection
mongoose.connect(mongoURL , {
    useNewUrlParser :true ,
    useUnifiedTopology: true,
})

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log('connected to mongodb servers')
})


db.on('error', ()=>{
    console.log('error occur on mongodb server')
})

db.on('disconnected', ()=>{
    console.log('disconnected from mongodb server')
})



//export the database connection
module.exports = db
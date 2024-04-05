// console.log('server file is running')
// console.log('server file is running')
// var fs = require('fs')
// var os = require('os')

// let user = os.userInfo();
// console.log(user)

// fs.appendFile('welcome.text' , `${user.username} \n` , ()=>{})

const express = require('express');

const db =require('./db');

const app = express();

const person =require('./models/person');

const bodyParser = require('body-parser');
app.use(bodyParser.json())



// app.get('/food/details' ,  (req ,res)=>{
//     const API ={
//         name:'paras',
//         age:21 ,
//         gender: 'Male',
//         // isAdult: false

//     }
//     res.send( API)
// })
app.get('/', async (req, res) => {
  
    try{

         await res.send('<h1>hii paras</h1>')

    } 
    catch{
    
    }
  
}) 

// app.get('/hotels' , (req,res)=>{

//     // res.send('hii evertopne')
//     res.send('hii paras')
// })

app.post('/hotels', async (req,res)=>{
       try{
        const data= req.body;
    
        const newPerson =new person(data);

        const result = await newPerson.save()

        res.json(result)

          
       }
       catch(err){
        console.log(err)

       }
})

app.get('/hotels', async (req,res)=>{
   try{
    const data =  await person.find();
    res.json(data);

   }catch(err){

   }
})



app.listen(3000, () => {
    console.log('listening on port 3000')
})






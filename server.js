var express= require('express');
var mongoose = require('mongoose');
var app = express();

// mongoose.connect('mongodb+srv://abdul:abdul12345@project1-ik8oe.mongodb.net/test?retryWrites=true&w=majority',{useUnifiedTopology:true,useNewUrlParser:true},function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("sudah konek ke database")
//     }
// });


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dyo:dyo123@siswa-abdul-ry9ct.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
  console.log('sudah konek database ....')
});



 app.get('/',function(req,res,next){
    res.json('selamat datang di halaman beranda')
 });
 
 app.get('/:name',function(req,res,next){
    res.json(req.params.name)
 });
 app.listen(3000, function(err){
     if(err){
         console.log(err);
     }else{
         console.log("server berjalan pada port 3000")
     }
 });
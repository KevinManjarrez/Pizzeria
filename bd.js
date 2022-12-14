const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

var mongoURL = "mongodb+srv://kevin:kevin@cluster1.568gnhs.mongodb.net/ordenar-comida"

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true})

var bd = mongoose.connection

bd.on('connected', () =>{
    console.log('Conexión con Mongo DB exitosa');
})

bd.on('error', ()=>{
    console.log('Conexión con Mongo DB fallida');
})

module.exports = mongoose
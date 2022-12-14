const mongoose = require("mongoose");
const pizzaSchema = mongoose.Schema({
    nombre : {type: String, require},
    tamaños: [],
    precios: [],
    categoria: {type: String, require},
    imagen: {type: String, require},
    descripcion: {type: String, require}
},{
    timestamps:true,
})

const modeloPizza = mongoose.model('pizzas', pizzaSchema)
module.exports = modeloPizza
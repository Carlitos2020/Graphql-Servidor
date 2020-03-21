import mongoose from 'mongoose'
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/clientes',{userNewUrlParser:true})

// Definir el Schema de Cliente
// Checar el Resolvers
const clientesSchema= new mongoose.Schema({
    nombre:String,
    apellido:String,
    empresa:String,
    emails:Array,
    edad:Number,
    tipo:String,
    pedidos:Array
})

// crear la tabla con el sgt Schema
const Clientes = mongoose.model('clientes',clientesSchema)

export { Clientes };
import mongoose from 'mongoose'
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/clientes',{userNewUrlParser:true})
// mongoose.set('setFindAndModify',false);



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
const Clientes = mongoose.model('clientes',clientesSchema);



// PRODUCTOS
const productosSchema= new mongoose.Schema({
    nombre:String,
    precio: Number,
    stock : Number
})

const Productos = mongoose.model('productos',productosSchema);



// Pedidos
const pedidoSchema= new mongoose.Schema({
    pedido: Array,
    total: Number,
    fecha: Date,
    cliente:String,
    estado:String
})

const Pedidos = mongoose.model('pedidos',pedidoSchema);


export { Clientes , Productos , Pedidos};
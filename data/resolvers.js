import mongoose from 'mongoose'
import { Clientes } from "./db"
import { rejects } from 'assert'


export const resolvers = {
  Query: {


    // ------------
    getClientes:(root,{limite , offset})=>{
      return Clientes.find({}).limit(limite).skip(offset)
    },

    getCliente: (root, { id }) => {
       return new Promise((resolve,object)=>{
          Clientes.findById(id, (error,cliente)=>{
            if (error) rejects(error)
              else resolve(cliente) 
            })

        })
    },

    totalClientes:(root) =>{
      return new Promise( (resolve,object)=>{
        Clientes.countDocuments({},(error,count)=>{
          if(error) rejects(error);
          else resolve(count);
        })

      })
    }

    // ------------
  },
  Mutation: {

    // ----------------

   crearCliente: (root,{ input }) => {

      // creamos el objeto
      const nuevoCliente = new Clientes({
       nombre : input.nombre,
       apellido : input.apellido,
       empresa : input.empresa,
       emails : input.emails,
       edad : input.edad,
       tipo : input.tipo,
       pedidos : input.pedidos
     })
        // mongo agrege automaticamente un id
        nuevoCliente.id= nuevoCliente._id

        return new Promise((resolve,object)=>{
          nuevoCliente.save((error)=>{
            if (error) {
              rejects(error); 
            } else {
              resolve(nuevoCliente)
            }
          })
        })

      },

      // {new:true} => si no existe crea uno nuevo
      actualizarCliente:(root,{ input }) => {
        return new Promise((resolve,object)=>{
          Clientes.findOneAndUpdate({ _id : input.id }, input, {new:true}, (error,cliente)=>{
            if (error) rejects(error)
              else resolve(cliente)
            })

        })

      },
      // 
      eliminarCliente:(root, { id })=>{
        return new Promise((resolve,object)=>{
          Clientes.findOneAndRemove({_id:id},(error)=>{
            if (error) rejects(error)
              else resolve("Se Eliminó correctamente")
            })
        });
      }


      // ----------------

    }
  }



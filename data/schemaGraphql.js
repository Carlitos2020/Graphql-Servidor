
export const typeDefs = `

type Cliente {
    id: ID
    nombre: String
    apellido: String
    empresa: String
    email: String
    edad: Int
    tipo: TipoCliente
    pedidos: [Pedido]
}
type Email {
    email: String
}

enum TipoCliente {
    PREMIUM
    BASICO
}
type Pedido {
    producto: String
    precio: Int
}

#Obtener  Datos del Cliente
type Query {
    #Obtener los Clientes
    getClientes(limite: Int) : [Cliente]
    getCliente(id: ID): Cliente
}







input PedidoInput {
    producto: String
    precio: Int
}
input EmailInput {
    email: String
}

input ClienteInput {
    id: ID
    nombre: String!
    apellido: String!
    empresa: String!
    email: String
    edad: Int!
    tipo: TipoCliente!
    pedidos: [PedidoInput]
}





#Operaciones Clientes
type Mutation {
""" Te permite Crear nuevos Clientes """
    crearCliente(input: ClienteInput): Cliente

""" Actualizando clientes """
    actualizarCliente(input: ClienteInput): Cliente

""" Eliminar cliente """
    eliminarCliente(id: ID!): String

}



`;
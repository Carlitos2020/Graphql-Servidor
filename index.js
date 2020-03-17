import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import {typeDefs} from './data/schema';
import {resolvers } from './data/resolvers.js';

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

// conectamos Apollo Server con Express
server.applyMiddleware({ app });

app.listen({ port: 8000 }, () => console.log(`Server on port http://localhost:8000${server.graphqlPath}`));

// https://github.com/MigueMartelo/React-GraphQL-Apollo-servidor/blob/master/data/resolvers.js


// Al usar Apollo usaremos una nueva grafica ya no GraphiQl sino el de APollo
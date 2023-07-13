// ========== Server
// import all packages
import express from 'express';
import dotenv from 'dotenv';

// import graphql packages
import { graphqlHTTP } from 'express-graphql';

// import graphql schema
import schema from './schemas/schema.js';

dotenv.config({ path: '.env' });

const { SERVICE_PORT = 3000 } = process.env;

const server = express();

server.use('/api', graphqlHTTP({
  schema,
  graphiql: true,
}));

server.listen(SERVICE_PORT, () => {
  console.log(`The GraphQL server is runnin at http://localhost:${SERVICE_PORT}`);
});

import express from "express";
import { ApolloServer } from "apollo-server-express";

const app = express();

const PORT = 4000;

const SERVER = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    settings: {
      "editor.theme": "light"
    }
  }
});

SERVER.applyMiddleware({ app });

app.listen(PORT, () =>
  console.log(
    `🚀 GraphQL playground is running at http://localhost:4000/graphql`
  )
);

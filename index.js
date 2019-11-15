import express from "express";
import { ApolloServer } from "apollo-server-express";

import typeDefs from "./api/schema";

const app = express();

const PORT = 4000;

class Friend {
  constructor(id, { firstName, lastName, gender, language, email }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.language = language;
    this.email = email;
  }
}

const friendDatabase = {};

const resolvers = {
  Query: {
    friend: () => {
      return {
        id: 28718992,
        firstName: "Manny",
        lastName: "Henri",
        gender: "Male",
        language: "English",
        emails: [{ email: "me@me.com" }, { email: "another@me.com" }]
      };
    }
  },
  Mutation: {
    createFriend: ({ input }) => {
      let id = require("crypto")
        .randomBytes(10)
        .toString("hex");
      friendDatabase[id] = input;
      return new Friend(id, input);
    }
  }
};

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

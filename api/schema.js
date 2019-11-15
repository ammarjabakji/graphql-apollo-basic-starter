import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Friend {
    id: ID
    firstName: String
    lastName: String
    gender: String
    language: String
    emails: [Email]!
  }
  type Email {
    email: String
  }

  type Query {
    friend: Friend
  }

  input FriendInput {
    id: ID
    firstName: String!
    lastName: String
    gender: String
    language: String
    email: String
  }

  type Mutation {
    createFriend(input: FriendInput): Friend
  }
`;

export default typeDefs;

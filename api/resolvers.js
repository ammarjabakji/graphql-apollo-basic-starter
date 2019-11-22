import { Friends } from './db';

// resolver map
export const resolvers = {
  Query: {
    getFriend: (root, { id }) => new Friend(id, friendDatabase[id]),
  },
  Mutation: {
    createFriend: (root, { input }) => {
      const newFriend = new Friends({
        firstName: input.firstName,
        lastName: input.lastName,
        gender: input.gender,
        age: input.age,
        language: input.language,
        email: input.email,
        contacts: input.contacts,
      });

      newFriend.id = newFriend._id;

      return new Promise((resolve, object) => {
        newFriend.save((err) => {
          if (err) reject(err);
          else resolve(newFriend);
        });
      });
    },
  },
};

export default resolvers;

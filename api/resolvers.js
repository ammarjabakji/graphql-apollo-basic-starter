import { Contacts } from "./db";

// const defaultData = [
//   {
//     id: 1,
//     name: "Luke SkyWaler",
//     gender: "male",
//     homeworld: "Tattoine"
//   },
//   {
//     id: 2,
//     name: "C-3PO",
//     gender: "bot",
//     homeworld: "Tattoine"
//   }
// ];

// const resolvers = {
//   Query: {
//     allPeople: () => {
//       return defaultData;
//     },
//     person: (root, { id }) => {
//       return defaultData.filter(character => {
//         return (character.id = id);
//       })[0];
//     }
//   }
// };

const resolvers = {
  Query: {
    getContacts: () => {
      return Contacts.find();
    },
    getOneContact: (root, { id }) => {
      return new Promise((resolve, object) => {
        Contacts.findById(id, (err, contact) => {
          if (err) reject(err);
          else resolve(contact);
        });
      });
    }
  },
  Mutation: {
    createContact: (root, { input }) => {
      const newContact = new Contacts({
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        company: input.company
      });

      newContact.id = newContact._id;

      return new Promise((resolve, object) => {
        newContact.save(err => {
          if (err) reject(err);
          else resolve(newContact);
        });
      });
    },
    updateContact: (root, { input }) => {
      return new Promise((resolve, object) => {
        Contacts.findOneAndUpdate(
          { _id: input.id },
          input,
          { new: true },
          (err, contact) => {
            if (err) reject(err);
            else resolve(contact);
          }
        );
      });
    },
    deleteContact: (root, { id }) => {
      return new Promise((resolve, object) => {
        Contacts.remove({ _id: id }, err => {
          if (err) reject(err);
          else resolve("Successfully deleted contact!");
        });
      });
    }
  }
};

export default resolvers;

import mongoose from "mongoose";

// Mongo connection
// mongoose.Promise = global.Promise;
// const connectDB = async () => {
//   try {
//     await mongoose.connect("mongodb://127.0.0.1:27017/contacts", {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useFindAndModify: false
//     });

//     console.log("MongoDB Connected...");
//   } catch (err) {
//     console.error(err.message);
//     // Exit process with failure
//     process.exit(1);
//   }
// };
// connectDB();

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  company: {
    type: String
  }
});

const Contacts = mongoose.model("contacts", contactSchema);

export { Contacts };

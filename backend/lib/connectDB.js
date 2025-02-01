import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URL;

// const connectDB = async () => {
//   try {
//     await mongoose.connect(MONGODB_URI);
//     console.log('\x1b[42m%s\x1b[0m', " MongoDB is connected ");
//   } catch (error) {
//     console.log(error);
//   }
// }

// export default connectDB;

// efficient MongoDB connection (serverless-friendly):
if (!global.mongooseConnection) {
  global.mongooseConnection = mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default global.mongooseConnection;

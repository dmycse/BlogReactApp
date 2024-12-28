import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('\x1b[42m%s\x1b[0m', " MongoDB is connected ");
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;
/*
import dns from "dns";
import mongoose from "mongoose";

dns.setDefaultResultOrder("ipv4first");

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://hshimanshu260_db_user:Himanshu12345@cluster0.3k0ag3d.mongodb.net/Medicare"
    );
    console.log("DB CONNECTED");
  } catch (error) {
    console.log("DB ERROR:", error);
  }
};
*/
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB CONNECTED");
  } catch (error) {
    console.log("DB ERROR:", error);
    process.exit(1);
  }
};

export default connectDB;
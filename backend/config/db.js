
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
// import mongoose from "mongoose";

// export const connectDB = async () => {
//   await mongoose
//     .connect(
//       process.env.MONGO_URL
//     )
//     .then(() =>console.log("DB Connected"));
// };
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("DB Connected");
  } catch (error) {
    console.log("MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};
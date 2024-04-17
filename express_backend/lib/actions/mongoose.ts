import mongoose from "mongoose";

export const connectTodb = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.mongo_url) {
    return console.log("MISSING DB URL");
  }

  try {
    await mongoose.connect(process.env.mongo_url, {
      dbName: "Backend",
    });

    console.log("Mongo Connected");
  } catch (error) {
    console.log(error);
  }
};

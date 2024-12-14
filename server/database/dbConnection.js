import mongoose from "mongoose";

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "REALTRUSTFLIPR",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((error) => {
      console.log(`Some error occured while connecting to database: ${error}`);
    });
};

export default dbConnect;

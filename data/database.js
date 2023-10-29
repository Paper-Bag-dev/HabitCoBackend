import mongoose from "mongoose";

export const ConnectDB = () => {
  mongoose
    .connect( process.env.MONGO_URI, { dbName: "HabitCo" })
    .then(() => console.log("DB connected"))
    .catch((e) => console.log(e));
};

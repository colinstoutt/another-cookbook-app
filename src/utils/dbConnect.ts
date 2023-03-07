import * as Mongoose from "mongoose";

Mongoose.set("strictQuery", true);

let db: Mongoose.Connection;
export async function dbConnect() {
  if (db) {
    return;
  }
  await Mongoose.connect(process.env.MONGO_URI!);

  db = Mongoose.connection;
  db.on("open", () =>
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`)
  )
    .on("close", () => console.log("Connection Closed"))
    .on("error", (error) => console.log(error));
}
export const disconnect = () => {
  if (!db) {
    return;
  }
  Mongoose.disconnect();
};

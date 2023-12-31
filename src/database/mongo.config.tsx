import mongoose from "mongoose";
export function connect() {
  mongoose
    .connect(process.env.MONGO_URL as string, {
      tls: true,
    })
    .then(() => console.log("connected"))
    .catch((err) => console.log("err", err));
}

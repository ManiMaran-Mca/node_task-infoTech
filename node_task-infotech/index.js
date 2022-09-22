import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import user from "./routers/user.js";
import book from "./routers/book.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/test");
    console.log("Db connected success");
  } catch (error) {
    console.log(error);
  }
};
connectDb();

app.use("/api/user", user);
app.use("/api/book", book);

app.listen(4000, () => {
  console.log("sever running at port 4000");
});

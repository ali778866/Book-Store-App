import express from "express";
import mongoose from "mongoose"
import dotenv from "dotenv"

import userRoutes from "./route/userRoute.js"
import bookRoute from "./route/bookRoute.js"

import cors from "cors";
const app = express()
app.use(express.json())
app.use(cors());
dotenv.config()

const PORT = process.env.PORT || 4000;
const URI = process.env.mongoDBURI || "mongodb://localhost:27017/";

try{
  mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  console.log("Connected to mongoDB")
} catch (error) {
  console.log("Error: ", error)
}

app.use("/book", bookRoute);
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
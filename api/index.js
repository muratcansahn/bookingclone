import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("disconnected", (err) => {
  console.log(`MongoDB connection error: ${err}`);
});
mongoose.connection.on("connected", () => {
  console.log(`MongoDB connected`);
});

//middlewares

///normally we cant send json object to express server prevent this we use this
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

///error handling
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Hata oluştu";
  return res.status(errorStatus).json(errorMessage);
});

app.listen(3000, () => {
  connect();
  console.log("Server started on port 3000");
});

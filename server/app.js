import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import dbConnect from "./database/dbConnection.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

// console.log(process.env.PORT);

//* connect frontend + backend by middleware
app.use(
  cors({
    origin: [process.env.CLIENT_URL, process.env.ADMIN_URL],
    methods: ["GET", "POST", "DELETE", "PUT"],
    Credential: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

dbConnect();
// app.use(errorMiddleware);

export default app;

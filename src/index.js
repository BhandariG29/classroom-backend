import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectdb.js";

const app = express();

dotenv.config({
    path: "./.env"
})

const PORT = process.env.PORT || 4002;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running at PORT: ${PORT}`)  
    })
}).catch((error) => {
    console.log("Database connection error ", error)
})
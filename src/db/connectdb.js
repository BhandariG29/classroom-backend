import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DB_CONNECT_URL}/${process.env.DB_NAME}`)
        console.log(`MongoDB conected at host: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongeDB Connection Error ", error)
        process.exit(1)
    }
} 

export { connectDB }
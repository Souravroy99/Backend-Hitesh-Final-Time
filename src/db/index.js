import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"
 
const connectionDB = async() => {
    const MongoDB_URL = process.env.MongoDB_URL
    
    try {
        const connectionInstance = await mongoose.connect(`${MongoDB_URL}/${DB_NAME}`) ;    
     
        console.log(`MongoDB Connected !! ${connectionInstance.connection.host}`);
    }
    catch (error) {
        console.log(`MongoDB connection error: ${error}`);        
        process.exit(1)
    }
}

export default connectionDB;
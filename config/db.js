import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
    try{
        const con = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to MongoDB Database ${con.connection.host}`)
    }catch(e){
        console.log(`Error in MongoDB ${e}`.bgRed.white)
    }
}

export default connectDB;
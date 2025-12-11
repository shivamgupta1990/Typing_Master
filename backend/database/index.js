// import mongoose from "mongoose";

// const connectDB = async () =>
// {
//      try {
//         mongoose.connection.on('connected', () =>{
//             console.log("DB Connected");
//         })
//          await mongoose.connect(`${process.env.MONGO_URL}TypingTest`)
//      } catch (error) {
//         console.error(error);
//      }
// }

// export default connectDB



import mongoose, { mongo } from "mongoose";
const connectDB=async()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_URL}TypingTest`);
        console.log("Database Connected");
    }catch(err){
        console.log("DB connection failed ",err);
    }
};

export default connectDB;
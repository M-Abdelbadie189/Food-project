import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://fooddelivery:1USg2ytM7Mbqfixs@cluster0.00qsr.mongodb.net/food-del').then(()=>console.log("Database connected"));
}
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        surname: {
            type: String,
        },
        phoneNumber: {
            type: Number,
        },
        age: {
            type: String,
        },
        date: {
            type: String,
        },
        destination: {
            type: String,
        },
        car: {
            type: Number
        }
       
    },
    { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
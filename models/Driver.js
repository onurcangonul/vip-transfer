import mongoose from "mongoose";
const DriverSchema = new mongoose.Schema(
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
        

    },
    { timestamps: true }
);

export default mongoose.models.Driver || mongoose.model("Driver", DriverSchema);
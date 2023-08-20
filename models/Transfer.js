import mongoose from "mongoose";

const TransferSchema = new mongoose.Schema(
    {
        date: {
            type: Date,
        },
        destination: {
            type: String,
        },
        car: {
            type: String,
            required: true,
        },
        patientInfo: {
            type: mongoose.Schema.Types.Mixed, 
        },
        driverInfo: {
            type: mongoose.Schema.Types.Mixed, 
        },
    },
    { timestamps: true }
);

export default mongoose.models.Transfer || mongoose.model("Transfer", TransferSchema);

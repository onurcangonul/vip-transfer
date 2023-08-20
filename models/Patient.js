import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema(
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
        
        transfer: {
            type: Boolean
        }

    },
    { timestamps: true }
);

export default mongoose.models.Patient || mongoose.model("Patient", PatientSchema);
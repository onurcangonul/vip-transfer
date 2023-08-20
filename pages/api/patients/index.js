import dbConnect from "@/util/dbConnect";
import Patient from "@/models/Patient";
const handler = async (req, res) => {
    await dbConnect();
    const { method } = req;

    if (method === "GET") {
        try {
            const patient = await Patient.find();
            res.status(200).json(patient);
        } catch (err) {
            console.log(err);
        }
    }

    if (method === "POST") {
        try {
            const newPatient = await Patient.create(req.body);
            res.status(200).json(newPatient);
        } catch (err) {
            console.log(err);
        }
    }
   
};

export default handler;
import dbConnect from "@/util/dbConnect";
import Driver from "@/models/Driver";
const handler = async (req, res) => {
    await dbConnect();
    const { method } = req;

    if (method === "GET") {
        try {
            const drivers = await Driver.find();
            res.status(200).json(drivers);
        } catch (err) {
            console.log(err);
        }
    }

    if (method === "POST") {
        try {
            const newDrivers = await Driver.create(req.body);
            res.status(200).json(newDrivers);
        } catch (err) {
            console.log(err);
        }
    }
};

export default handler;
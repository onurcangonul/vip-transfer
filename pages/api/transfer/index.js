import dbConnect from "@/util/dbConnect";
import Transfer from "@/models/Transfer";
const handler = async (req, res) => {
    await dbConnect();
    const { method } = req;

    if (method === "GET") {
        try {
            const transfer = await Transfer.find();
            res.status(200).json(transfer);
        } catch (err) {
            console.log(err);
        }
    }

    if (method === "POST") {
        try {
            const newTransfer = await Transfer.create(req.body);
            res.status(200).json(newTransfer);
        } catch (err) {
            console.log(err);
        }
    }
   
};

export default handler;
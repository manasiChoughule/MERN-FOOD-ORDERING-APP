import express, {Request, Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose, { Mongoose } from "mongoose";

mongoose
.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(() => console.log("Connected to Database!"));

// open a server for us.
const app  = express();

// converts every api request body to json
app.use(express.json());
app.use(cors());

// add endpoins
app.get("/test", async (req: Request, res: Response) => {
    res.json({message: "Hello!"});
});

app.listen(7000, () => {
    console.log("Server started on localhost:7000");
});
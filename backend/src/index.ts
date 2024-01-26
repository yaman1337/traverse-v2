import express, { Application, Request, Response } from "express"
import dotenv from "dotenv"
import { authRouter } from "./routes";

dotenv.config()

const { PORT } = process.env;

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Traverse backend is up and running.")
})

// endpoints
app.use("/auth", authRouter)

app.listen(PORT, () => {
    console.log("Server is running on: http://localhost:"+PORT)
})
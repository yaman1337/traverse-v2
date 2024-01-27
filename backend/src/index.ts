import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import { authRouter } from "./routes";
import { placesRouter } from "./routes/places.route";

dotenv.config();

const { PORT } = process.env;

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Traverse backend is up and running.");
});

// endpoints
app.use("/auth", authRouter);
app.use("/places", placesRouter);

app.listen(PORT, () => {
  console.log("Server is running on: http://localhost:" + PORT);
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes");
const places_route_1 = require("./routes/places.route");
dotenv_1.default.config();
const { PORT } = process.env;
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Traverse backend is up and running.");
});
// endpoints
app.use("/auth", routes_1.authRouter);
app.use("/places", places_route_1.placesRouter);
app.listen(PORT, () => {
    console.log("Server is running on: http://localhost:" + PORT);
});

import express from "express";
import cors from "cors";
import "dotenv/config";
import dalleRoutes from "./routes/dalle.routes";

const app = express();
app.use(
    cors({
        origin: "*",
    })
);
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/dalle", dalleRoutes);

app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello from DALL.E" });
});

app.listen(8080, () => console.log("Server has started on port 8080"));

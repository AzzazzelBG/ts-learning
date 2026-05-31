import express from "express";
import bugRoutes from "./routes/bugs.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/bugs", bugRoutes);

app.get("/test", (req, res) => {
    res.json({ message: "Server works" });
});

app.listen(PORT, () => {
    console.log(`🐛 Bug Tracker API running at http://localhostL:${PORT}`);
    console.log(`   Try: GET http://localhost:${PORT}/api/bugs`);
});
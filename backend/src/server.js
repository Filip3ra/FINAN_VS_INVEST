import express from "express";
import cors from "cors";
import simulationRoutes from "./routes/simulation.routes.js"; // import routes from file 

const app = express();

app.use(cors());
app.use(express.json());
app.use("/simulate", simulationRoutes); // exec message from imported file 

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(3333, () => {
  console.log("🚀 API rodando na porta 3333");
});

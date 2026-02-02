import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ status: "rota /simulate funcionando" });
});

router.post("/", (req, res) => {
  res.json({ message: "Simulação recebida com sucesso" });
});

export default router;

import express from "express";
import { addPlayer, addScore, getPlayers, getScores } from "../controllers";

const router = express.Router();

router.get("/scores", getScores);
router.post("/scores", addScore);

router.get("/players", getPlayers); // Nouvelle route pour récupérer la liste des joueurs
router.post("/players", addPlayer); // Nouvelle route pour ajouter un joueur

export default router;

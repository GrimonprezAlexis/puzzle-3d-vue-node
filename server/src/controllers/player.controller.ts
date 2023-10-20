import { Request, Response } from "express";
import Player, { IPlayer } from "../models/player.model";

export const getPlayers = async (req: Request, res: Response) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const addPlayer = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
  }

  const player: IPlayer = new Player({
    name,
    email,
  });

  try {
    const newPlayer = await player.save();
    res.status(201).json(newPlayer);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

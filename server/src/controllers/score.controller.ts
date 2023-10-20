import { Request, Response } from "express";
import Score from "../models/score.model";

export const getScores = async (req: Request, res: Response) => {
  try {
    const scores = await Score.find();
    res.json(scores);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const addScore = async (req: Request, res: Response) => {
  const score = new Score({
    name: req.body.name,
    points: req.body.points,
  });

  try {
    const newScore = await score.save();
    res.status(201).json(newScore);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

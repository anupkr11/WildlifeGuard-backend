import { Request, Response } from "express";
import wildlifedata from "../models/wildlifeData.js";

export const getWildlifeData = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await wildlifedata.find({});
    res.json(data);
  } catch (error: any) {
    res.status(500).json({ message: "Failed to fetch wildlife data", error: error.message });
  }
};

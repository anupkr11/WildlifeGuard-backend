import { Request, Response } from "express";
import programdata from "../models/ProgramData.js";

export const getProgramData = async (req: Request, res: Response): Promise<void> => {
  const data = await programdata.find({});
  res.json(data);
};

export const getProgramById = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const program = await programdata.findOne({ ID: id });
    if (!program) {
      res.status(404).json({ message: "Program not found" });
      return;
    }
    res.json(program);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Failed to fetch program data", error: error.message });
  }
};

export const deleteProgram = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const deleted = await programdata.findOneAndDelete({ ID: id });
    if (!deleted) {
      res.status(404).json({ message: "Program not found" });
      return;
    }
    res.json({ message: "Program deleted successfully" });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Failed to delete program", error: error.message });
  }
};

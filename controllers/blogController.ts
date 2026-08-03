import { Request, Response } from "express";
import blogdata from "../models/blogData.js";

export const getBlogData = async (req: Request, res: Response): Promise<void> => {
  const data = await blogdata.find({});
  res.json(data);
};

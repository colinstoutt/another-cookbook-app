import { dbConnect } from "@/utils/dbConnect";
import Recipe from "@/models/Recipe";
import { NextApiRequest, NextApiResponse } from "next";
import recipeSeed from "../../../data/recipes.json";

dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  if (method === "GET") {
    try {
      const recipes = await Recipe.create(recipeSeed);
      // display success message and data
      res.status(200).json({ success: true, data: recipes });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else {
    res.status(400).json({ success: false });
  }
};

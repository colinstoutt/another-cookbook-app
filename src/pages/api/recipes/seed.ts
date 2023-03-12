import dbConnect from "@/utils/dbConnect";
import RecipeNew from "@/models/RecipeNew";
import { NextApiRequest, NextApiResponse } from "next";
import recipeSeed from "../../../data/recipes2.json";

dbConnect();

const seed = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  if (method === "GET") {
    try {
      const recipes = await RecipeNew.create(recipeSeed);
      // display success message and data
      res.status(200).json({ success: true, data: recipes });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else {
    res.status(400).json({ success: false });
  }
};

export default seed;

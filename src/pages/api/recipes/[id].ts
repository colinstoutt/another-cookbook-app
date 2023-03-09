// dynamic route
import dbConnect from "@/utils/dbConnect";
import Recipe from "@/models/Recipe";
import { NextApiRequest, NextApiResponse } from "next";
// connect to mongoDb
dbConnect();

const recipeController = async (req: NextApiRequest, res: NextApiResponse) => {
  // destructure request to get api methods and specific object id
  const {
    query: { id },
    method,
  } = req;
  // use switchcase to create controller
  switch (method) {
    case "GET":
      try {
        const recipe = await Recipe.findById(id);
        console.log(method);
        if (!recipe) return res.status(400).json({ success: false });
        res.status(200).json({ success: true, data: recipe });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const recipe = await Recipe.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        res.status(200).json({ success: true, data: recipe });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedrecipe = await Recipe.deleteOne({ _id: id });
        if (!deletedrecipe) return res.status(400).json({ success: false });
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default recipeController;

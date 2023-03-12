// dynamic route
import dbConnect from "@/utils/dbConnect";
import Recipe2 from "@/models/Recipe2";
import { NextApiRequest, NextApiResponse } from "next";
import withNextCors from "../../../../nextCors";

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
        const recipe = await Recipe2.findById(id);
        console.log(method);
        if (!recipe) return res.status(400).json({ success: false });
        res.status(200).json({ success: true, data: recipe });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const recipe = await Recipe2.findByIdAndUpdate(id, req.body, {
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
        const deletedrecipe = await Recipe2.deleteOne({ _id: id });
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

export default withNextCors(recipeController);

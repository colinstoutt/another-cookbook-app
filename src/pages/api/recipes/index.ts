import dbConnect from "@/utils/dbConnect";
import Recipe2 from "@/models/Recipe2";
import withNextCors from "../../../../nextCors";
// import special nextjs req and res
import { NextApiRequest, NextApiResponse } from "next";
// connect to mongoDb
dbConnect();

const recipesController = async (req: NextApiRequest, res: NextApiResponse) => {
  // destructure request to get api methods
  const { method } = req;
  // use switchcase to build controller
  switch (method) {
    case "GET":
      try {
        const recipes = await Recipe2.find({});
        // display success message and data
        res.status(200).json({ success: true, data: recipes });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const recipe = await Recipe2.create(req.body);
        res.status(201).json({ success: true, data: recipe });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default withNextCors(recipesController);

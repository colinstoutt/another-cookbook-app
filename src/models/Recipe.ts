import mongoose, { Schema } from "mongoose";

interface Recipe {
  name: string;
  imageUrl: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  ingredients: string;
  instructions: string;
  calPerServing: number;
}

const recipeSchema = new Schema<Recipe>({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  prepTime: {
    type: Number,
    required: true,
  },
  cookTime: {
    type: Number,
    required: true,
  },
  servings: {
    type: Number,
  },
  ingredients: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Recipe ||
  mongoose.model<Recipe>("Recipe", recipeSchema);

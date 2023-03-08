import mongoose from "mongoose";

// creating type for ingredient schema
type ingredient = {
  name: string;
  cal: number;
};
const ingredientSchema = new mongoose.Schema<ingredient>({
  name: { type: String, required: true },
  cal: { type: Number },
});

type instruction = {
  step: string;
};
const instructionSchema = new mongoose.Schema<instruction>({
  step: { type: String, required: true },
});

type recipe = {
  name: string;
  imageUrl: string;
  prepTime: number;
  cookTime: number;
  ingredients: ingredient[];
  instructions: instruction[];
};
const recipeSchema = new mongoose.Schema<recipe>({
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
  ingredients: {
    type: [ingredientSchema],
    required: true,
  },
  instructions: {
    type: [instructionSchema],
    required: true,
  },
});

export default mongoose.models.Recipe ||
  mongoose.model<recipe>("Recipe", recipeSchema);

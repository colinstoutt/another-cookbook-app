import mongoose, { Schema } from "mongoose";

// creating type for ingredient schema
interface Ingredient {
  name: string;
  cal: number;
}
const ingredientSchema = new Schema<Ingredient>({
  name: { type: String, required: true },
  cal: { type: Number },
});

interface Instruction {
  step: string;
}
const instructionSchema = new Schema<Instruction>({
  step: { type: String, required: true },
});

interface Recipe {
  name: string;
  imageUrl?: string;
  prepTime: number;
  cookTime: number;
  ingredients: Ingredient[];
  instructions: Instruction[];
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
  ingredients: {
    // type: array of ingredients
    type: [ingredientSchema],
    required: true,
  },
  instructions: {
    type: [instructionSchema],
    required: true,
  },
});

export default mongoose.models.Recipe ||
  mongoose.model<Recipe>("Recipe", recipeSchema);

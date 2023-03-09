import React from "react";
import Instruction from "@/types/instruction";
import Ingredient from "@/types/ingredient";

interface Recipe {
  name: string;
  imageUrl: string;
  prepTime: number;
  cookTime: number;
  ingredients: Ingredient[];
  instructions: Instruction[];
  _id: number;
}
const RecipeCard = ({ recipe }: Recipe) => {
  return <></>;
};

export default RecipeCard;

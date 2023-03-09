import React from "react";
import Image from "next/image";
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
  return (
    <>
      <div className="index__recipe-card" key={recipe._id}>
        <h1 className="index__recipe-card-title">{recipe.name}</h1>
        <Image
          src={recipe.imageUrl}
          alt={recipe.name}
          style={{ objectFit: "cover", borderRadius: "10px" }}
          width={400}
          height={200}
          priority
        />
      </div>
    </>
  );
};

export default RecipeCard;

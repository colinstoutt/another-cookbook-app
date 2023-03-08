import Link from "next/link";
import Image from "next/image";
import config from "../config/config";
import Instruction from "@/types/instruction";
import Ingredient from "@/types/ingredient";

interface Props {
  recipes: {
    name: string;
    imageUrl: string;
    prepTime: number;
    cookTime: number;
    ingredients: Ingredient[];
    instructions: Instruction[];
    _id: number;
  }[];
}

const Index = ({ recipes }: Props) => {
  return (
    <div className="index">
      <h1 className="heading">My Recipes</h1>
      {recipes.map((recipe) => {
        return (
          <div className="index__recipe-card" key={recipe._id}>
            <h1 className="index__recipe-card-title">{recipe.name}</h1>
            <Image
              className="index___recipe-card-image"
              src={recipe.imageUrl}
              alt={recipe.name}
              width="400"
              height="200"
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          </div>
        );
      })}
    </div>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch(`${config.PROD}`);
  const { data } = await res.json();
  return { recipes: data };
};

export default Index;

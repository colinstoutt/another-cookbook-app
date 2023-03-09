import Link from "next/link";
import config from "../config/config";
import Instruction from "@/types/instruction";
import Ingredient from "@/types/ingredient";
import RecipeCard from "@/components/RecipeCard";

interface Recipes {
  data: {
    name: string;
    imageUrl: string;
    prepTime: number;
    cookTime: number;
    ingredients: Ingredient[];
    instructions: Instruction[];
    _id: number;
  }[];
}

const Index = ({ data }: Recipes) => {
  return (
    <div className="index">
      <h1 className="heading index__heading">My Recipes</h1>
      <div className="line-divide"></div>
      <div className="index__recipes">
        {data.map((recipe) => {
          return <RecipeCard recipe={recipe} />;
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${config.PROD}`);
  const { data } = await res.json();
  return { props: { data } };
}

export default Index;

import Link from "next/link";
import config from "../config/config";
import Image from "next/image";

interface Recipes {
  data: {
    name: string;
    imageUrl: string;
    prepTime: number;
    cookTime: number;
    servings: number;
    ingredients: string;
    instructions: string;
    calPerServing: number;
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
          return (
            <div className="index__recipe-card" key={recipe._id}>
              <h1 className="index__recipe-card-title">{recipe.name}</h1>
              <Link href={`/${recipe._id}`}>
                <Image
                  src={recipe.imageUrl}
                  alt={recipe.name}
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                  width={400}
                  height={200}
                  priority
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const res = await fetch(`${config.PROD}`);
    const { data } = await res.json();
    return { props: { data } };
  } catch (error) {
    console.log(error);
  }
}

export default Index;

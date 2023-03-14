import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { CircularProgress } from "@mui/material";
import Link from "next/link";
import config from "@/config/config";

interface Props {
  data: {
    _id: string;
    name: string;
    imageUrl: string;
    prepTime: number;
    cookTime: number;
    servings: number;
    ingredients: string;
    instructions: string;
  };
}
type QueryParams = {
  id: string;
};

const Recipe = ({ data }: Props) => {
  const [confirm, setConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();
  console.log(data);

  useEffect(() => {
    if (isDeleting) {
      deleteRecipe();
    }
  }, [isDeleting]);

  const deleteRecipe = async () => {
    const recipeId = router.query.id;
    try {
      await fetch(`${config.DEV}${recipeId}`, {
        method: "DELETE",
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    setConfirm(false);
  };

  const ConfirmWindow = () => {
    return (
      <div className="show-recipe__confirm">
        <h1 className="show-recipe__confirm-heading">Are you sure?</h1>
        <div className="show-recipe__confirm-btns">
          <button
            className="show-recipe__confirm-btns-cancel"
            onClick={() => setConfirm(false)}
          >
            Cancel
          </button>
          <button
            className="show-recipe__confirm-btns-delete"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="show-recipe">
      {isDeleting ? (
        <h1 className="show__loader">
          <CircularProgress sx={{ color: "rgb(255, 185, 55)" }} />
        </h1>
      ) : (
        <>
          <p className="heading">{data.name}</p>
          <div className="line-divide"></div>
          <div className="show-recipe__image">
            <div className="show-recipe__image-times">
              <p>
                Prep Time: <span>{data.prepTime} min</span>
              </p>
              <p>
                Cook Time: <span>{data.cookTime} min</span>
              </p>
            </div>
            <Image
              src={
                !data.imageUrl
                  ? "https://i.imgur.com/W8P4PhE.jpg"
                  : data.imageUrl
              }
              alt={data.name}
              style={{ objectFit: "cover", borderRadius: "10px" }}
              width={400}
              height={200}
              priority
            />
          </div>
          <h1 className="show-recipe__subheading">Ingredients</h1>
          <p className="show-recipe__p">{data.ingredients}</p>
          <h1 className="show-recipe__subheading">Instructions</h1>
          <p className="show-recipe__p">{data.instructions}</p>

          {data.servings ? (
            <p className="show-recipe__serves">
              Serves: <span>{data.servings}</span>
            </p>
          ) : (
            <></>
          )}
          <Link href={`/${data._id}/edit`}>
            <button className="show-recipe__edit">Edit</button>
          </Link>
          {!confirm ? (
            <button
              className="show-recipe__delete"
              onClick={() => setConfirm(true)}
            >
              Delete
            </button>
          ) : (
            <ConfirmWindow />
          )}
        </>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<
  Props,
  QueryParams
> = async ({ query }) => {
  const { id } = query;
  try {
    const res = await fetch(`${config.DEV}${id}`);
    const { data } = await res.json();
    return { props: { data } };
  } catch (error) {
    console.log(error);
    return { props: { data: null } };
  }
};

export default Recipe;

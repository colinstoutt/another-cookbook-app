import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const AddRecipe = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    imageUrl: "",
    prepTime: "",
    cookTime: "",
    servings: "",
    ingredients: "",
    instructions: "",
  });

  useEffect(() => {
    if (isSubmitting) {
      createRecipe();
    }
  }, [isSubmitting]);

  const createRecipe = async () => {
    try {
      await fetch("http://localhost:3000/api/recipes", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      console.log(form);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChangeTextarea = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="add-recipe">
      <div>
        <h1 className="heading">Add Recipe</h1>
        <div className="line-divide"></div>
        {isSubmitting ? (
          <h1>Loading...</h1>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>What are you making?</label>
            <br />

            <input
              className="add-recipe__input"
              type="text"
              name="name"
              onChange={handleChange}
              required
            />
            <br />
            <label>Image (url)</label>
            <br />
            <input
              className="add-recipe__input"
              type="text"
              name="imageUrl"
              onChange={handleChange}
            />
            <br />
            <label>
              Prep Time <span>(min)</span>
            </label>
            <br />
            <input
              className="add-recipe__input"
              type="number"
              name="prepTime"
              onChange={handleChange}
              required
            />
            <br />
            <label>
              Cook Time<span>(min)</span>
            </label>
            <br />
            <input
              className="add-recipe__input"
              type="number"
              name="cookTime"
              onChange={handleChange}
              required
            />
            <br />
            <label>Servings</label>
            <br />
            <input
              className="add-recipe__input"
              type="number"
              name="servings"
              onChange={handleChange}
              required
            />
            <br />
            <label>Ingredients</label>
            <br />
            <textarea
              className="add-recipe__input"
              rows={5}
              cols={30}
              name="ingredients"
              onChange={handleChangeTextarea}
              required
            />
            <br />
            <label>Instructions</label>
            <br />
            <textarea
              className="add-recipe__input"
              rows={5}
              cols={30}
              name="instructions"
              onChange={handleChangeTextarea}
              required
            />
            <br />
            <button className="add-recipe__submit" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddRecipe;

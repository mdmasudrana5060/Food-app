import { useEffect, useState } from "react";
import "./FoodDetail.css";
import IngredientList from "./IngredientList";
/* eslint-disable react/prop-types */
const API_KEY = `0f3dccaf1b2149848b258a3f7838e480`;
export default function FoodDetail({ foodId }) {
  const [foodDetail, setFoodDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  console.log(foodDetail);

  useEffect(() => {
    async function fetchFoodDetail() {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/${foodId}/information?apiKey=${API_KEY}`
      );
      const data = await res.json();
      console.log(data);
      setFoodDetail(data);
      setIsLoading(false);
    }
    fetchFoodDetail();
  }, [foodId]);
  return (
    <div>
      <div className="recipeCard">
        <div>
          <h1 className="recipeName">{foodDetail.title}</h1>
          <img className="recipeImg" src={foodDetail.image} alt="" />
        </div>
        <div className="recipeDetails">
          <span>
            <strong>{foodDetail.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>Serves{foodDetail.servings}</strong>
          </span>
          <span>{foodDetail.vegetarian ? "Vegetarian" : "Non-Vegetarian"}</span>
        </div>

        <div>
          <strong>
            $<span>{foodDetail.pricePerServing / 100} Per Serving </span>
          </strong>
        </div>
        <br />
        <h2>Ingredients</h2>
        {isLoading ? (
          <p>Loading....</p>
        ) : (
          <IngredientList food={foodDetail}></IngredientList>
        )}

        <h2>Instruction</h2>
        <div className="recipeInstruction">
          <ol className="orderList">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              foodDetail.analyzedInstructions[0].steps.map((step) => (
                <li className="listItem" key={step.index}>
                  {step.step}
                </li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}

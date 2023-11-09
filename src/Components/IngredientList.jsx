import Ingredient from "./Ingredient";

/* eslint-disable react/prop-types */
export default function IngredientList({ food }) {
  console.log(food);
  return (
    <div>
      {food.extendedIngredients.map((item) => (
        <Ingredient key={item.name} item={item}></Ingredient>
      ))}
    </div>
  );
}

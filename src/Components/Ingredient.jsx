/* eslint-disable react/prop-types */
import "./Ingredient.css";
export default function Ingredient({ item }) {
  return (
    <div className="itemContainer">
      <h3>{item.name}</h3>
      <h3>
        {item.amount} {item.unit}
      </h3>
    </div>
  );
}

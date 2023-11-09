/* eslint-disable react/prop-types */
import "./FoodData.css";
export default function FoodData({ foodData, setFoodId }) {
  return (
    <div className="itemContainer">
      <img className="itemImage" src={foodData.image} alt="" />
      <div className="itemContent">
        <p className="itemName">{foodData.title}</p>
        <div className="buttonContainer">
          <button
            onClick={() => {
              setFoodId(foodData.id);
            }}
            className="itemButton"
          >
            View Recipe
          </button>
        </div>
      </div>
    </div>
  );
}

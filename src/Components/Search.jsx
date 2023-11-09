import { useEffect } from "react";
import { useState } from "react";
import FoodData from "./FoodData";
import "./Search.css";
import FoodDetail from "./FoodDetail";

const url = `https://api.spoonacular.com/recipes/complexSearch`;
const API_KEY = `0f3dccaf1b2149848b258a3f7838e480`;
export default function Search() {
  const [query, setQuery] = useState("pizza");
  const [foodsData, setFoodsData] = useState([]);
  const [foodId, setFoodId] = useState("656329");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${url}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();

      setFoodsData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div>
      <div className="searchContainer">
        <input
          className="input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="childContainer">
        <div className="childItemNumber1">
          {foodsData.map((foodData) => (
            <FoodData
              key={foodData.id}
              setFoodId={setFoodId}
              foodData={foodData}
            ></FoodData>
          ))}
        </div>
        <div className=" childItemNumber2">
          <FoodDetail foodId={foodId}></FoodDetail>
        </div>
      </div>
    </div>
  );
}

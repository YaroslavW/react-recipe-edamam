import React, { useEffect, useState } from 'react';
import Recipes from './Recipes';
import './App.css';

const App = () => {
const APP_ID = "38a8ad8c";
const APP_KEY = "e407f12584c88a55d3eed18b40a12458";
const [recipes, setRecipes] = useState([]);

useEffect(() => {
  getRecipes()
},[])

const getRecipes = async () => {
  const response = await fetch(
    `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
  );
  const data = await response.json()
  setRecipes(data.hits)
  console.log(data.hits)
}
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipes
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;

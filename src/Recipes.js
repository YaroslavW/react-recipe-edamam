import React from 'react';
import style from './recipe.module.css';

const Recipes = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <p>{calories}</p>
      <ol>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ol>
      <img className={style.img} src={image} alt="" />
    </div>
  );
};
export default Recipes;
import React from 'react';

const RecipeCard = ({ name })=> {
  return (
    <li>
      { name }
      <button>x</button>
    </li>
  );
};


export default RecipeCard;

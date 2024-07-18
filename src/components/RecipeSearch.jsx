import React from "react";
import { RecipeInput } from "./ui/RecipeInput";

const RecipeSearch = ({ clickFn }) => {
  const handleSearch = (event) => {
    clickFn(event.target.value);
  };

  return (
    <div>
      <RecipeInput onChange={handleSearch} />
    </div>
  );
};

export default RecipeSearch;

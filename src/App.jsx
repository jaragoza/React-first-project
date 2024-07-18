import React, { useState } from "react";
import { ChakraProvider, Box } from "@chakra-ui/react ";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  // Handler to set the selected recipe
  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };
  const handleBackToList = () => {
    setSelectedRecipe();
  };

  return (
    <ChakraProvider>
      <Box>
        {selectedRecipe ? (
          <RecipePage recipe={selectedRecipe} onClick={handleBackToList} />
        ) : (
          <RecipeListPage onSelectRecipe={handleRecipeSelect} />
        )}
      </Box>
    </ChakraProvider>
  );
};

export default App;

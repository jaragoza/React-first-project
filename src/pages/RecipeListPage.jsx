import { Heading, Box, Center, VStack, Grid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { data } from "../utils/data";
import RecipeSearch from "../components/RecipeSearch";
import RecipeList from "../components/ui/RecipeList";

export const RecipeListPage = ({ onSelectRecipe }) => {
  const [searchRecipe, setSearchRecipe] = useState("");

  const filteredRecipes = data.hits.filter((hit) =>
    hit.recipe.label.toLowerCase().includes(searchRecipe.toLowerCase())
  );

  return (
    <Box bgGradient="linear(to-r, cyan.300, blue.500)" minH="100vh" p={10}>
      <Center>
        <VStack spacing={5} w="100%">
          <Heading
            fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
            fontStyle="sans-serif"
            fontWeight="500"
            color="white"
            textAlign="center"
          >
            Winc Recipe Checker
          </Heading>
          <Box width={{ base: "90%", md: "70%", lg: "50%" }}>
            <RecipeSearch clickFn={setSearchRecipe} />
          </Box>
        </VStack>
      </Center>

      <Center mt={10}>
        {filteredRecipes.length > 0 ? (
          <Grid
            templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
            gap={8}
            maxWidth="1400px"
            width="100%"
          >
            {filteredRecipes.map((hit) => (
              <RecipeList
                key={hit.recipe.label}
                recipe={hit.recipe}
                onClick={() => onSelectRecipe(hit.recipe)}
              />
            ))}
          </Grid>
        ) : (
          <Text fontSize="2xl" color="white">
            No recipes found.
          </Text>
        )}
      </Center>
    </Box>
  );
};

export default RecipeListPage;

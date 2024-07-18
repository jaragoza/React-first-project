import React from "react";
import { Box, Image, Text, HStack, Badge, Center } from "@chakra-ui/react";

const RecipeList = ({ recipe, onClick }) => {
  return (
    <Center>
      <Box
        width="100%"
        height="100%"
        maxW="sm"
        p={1}
        borderWidth="1px"
        shadow="md"
        //borderRadius="lg"
        onClick={onClick}
        cursor="pointer"
        bg="green.50"
        overflow="hidden"
        _hover={{ transform: "scale(1.05)" }}
        transition="transform 0.2s"
      >
        <Image
          src={recipe.image}
          alt={recipe.label}
          width="100%"
          height="250px"
          objectFit="cover"
        />

        {recipe.mealType && (
          <Text
            mt={5}
            textAlign="center"
            textTransform="uppercase"
            fontSize="sm"
          >
            {" "}
            {recipe.mealType.join(", ")}
          </Text>
        )}

        <Box textAlign="center">
          <Text fontSize={{ base: "md", md: "lg", lg: "xl" }} fontWeight="bold">
            {recipe.label}
          </Text>

          <HStack spacing={2} mt={3} justifyContent="center">
            {recipe.healthLabels.includes("Vegan") && (
              <Badge colorScheme="purple">Vegan</Badge>
            )}
            {recipe.healthLabels.includes("Vegetarian") && (
              <Badge colorScheme="purple">Vegetarian</Badge>
            )}
          </HStack>

          {recipe.dietLabels.length > 0 && (
            <Badge mt={3} mb={3} colorScheme="green">
              {recipe.dietLabels.join(", ")}
            </Badge>
          )}
          {recipe.dishType && <Text>Dish: {recipe.dishType.join(", ")}</Text>}

          {recipe.cautions.length > 0 && (
            <Badge mt={3} mb={4} colorScheme="orange">
              Cautions: {recipe.cautions.join(", ")}
            </Badge>
          )}
        </Box>
      </Box>
    </Center>
  );
};

export default RecipeList;

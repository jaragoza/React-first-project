import React from "react";
import {
  Box,
  Image,
  Text,
  Heading,
  VStack,
  HStack,
  Badge,
  Button,
  SimpleGrid,
  GridItem,
  Center,
} from "@chakra-ui/react";

export const RecipePage = ({ recipe, onClick }) => {
  const roundNutrient = (nutrient) => {
    return nutrient ? Math.round(nutrient.quantity) : 0;
  };

  return (
    <Box bg="blue.50" minH="100vh" p={4}>
      <Box
        maxW="3xl"
        mx="auto"
        bg="white"
        p={4}
        borderRadius="md"
        shadow="md"
        overflow="hidden"
      >
        <Button onClick={onClick} mb={5} colorScheme="gray">
          Back to List
        </Button>

        <Box w="100%" overflow="hidden">
          <Image
            src={recipe.image}
            alt={recipe.label}
            width="100%"
            height="450px"
            objectFit="cover"
          />
        </Box>
        <Center>
          <Box p={8}>
            {recipe.mealType && (
              <Text
                textTransform="uppercase"
                textAlign="center"
                fontSize="sm"
                fontWeight="normal"
                fontFamily="sans-serif"
              >
                {recipe.mealType.join(", ")}
              </Text>
            )}
            <Heading
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              fontFamily="sans-serif"
            >
              {recipe.label}
            </Heading>
          </Box>
        </Center>
        <VStack spacing={4} align="start" p={5}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} w="100%">
            <GridItem>
              {recipe.dishType && (
                <Text fontWeight="medium" mb={2}>
                  Dish: {recipe.dishType.join(", ")}
                </Text>
              )}
              {recipe.totalTime > 0 && (
                <Text fontWeight="medium">
                  Total Cooking Time: {recipe.totalTime} minutes
                </Text>
              )}
              {recipe.yield && (
                <Text fontWeight="medium">Servings: {recipe.yield}</Text>
              )}

              <Heading size="sm" mt={4} mb={2}>
                Ingredients:
              </Heading>
              <VStack
                align="start"
                spacing={1}
                mb={10}
                fontFamily="sans-serif"
                fontWeight="medium"
              >
                {recipe.ingredientLines.map((ingredient, index) => (
                  <Text key={index}>{ingredient}</Text>
                ))}
              </VStack>
            </GridItem>
            <GridItem>
              {recipe.dietLabels.length > 0 && (
                <Box>
                  <Heading size="sm" mb={2}>
                    Diet Labels:
                  </Heading>
                  <HStack spacing={2} wrap="wrap">
                    {recipe.dietLabels.map((label) => (
                      <Badge key={label} colorScheme="green">
                        {label}
                      </Badge>
                    ))}
                  </HStack>
                </Box>
              )}
              {recipe.healthLabels.length > 0 && (
                <Box mt={4}>
                  <Heading size="sm" mb={2}>
                    Health Labels:
                  </Heading>
                  <HStack spacing={2} wrap="wrap">
                    {recipe.healthLabels.map((label) => (
                      <Badge key={label} colorScheme="purple">
                        {label}
                      </Badge>
                    ))}
                  </HStack>
                </Box>
              )}
              {recipe.cautions.length > 0 && (
                <Box mt={4}>
                  <Heading size="sm" mb={2}>
                    Cautions:
                  </Heading>
                  <Badge colorScheme="orange">
                    {recipe.dietLabels.join(", ")}
                  </Badge>
                </Box>
              )}

              {recipe.totalNutrients && (
                <Box mt={4} mb={6}>
                  <Heading size="sm" mb={2}>
                    Total Nutrients:
                  </Heading>
                  <SimpleGrid columns={3} spacing={3}>
                    <Box>
                      <Text>
                        {roundNutrient(recipe.totalNutrients.ENERC_KCAL)} kcal
                      </Text>
                      <Text fontFamily="monospace">CALORIES</Text>
                    </Box>
                    <Box>
                      <Text>
                        {roundNutrient(recipe.totalNutrients.PROCNT)} g
                      </Text>
                      <Text fontFamily="monospace">PROTEIN</Text>
                    </Box>
                    <Box>
                      <Text>{roundNutrient(recipe.totalNutrients.FAT)} g</Text>
                      <Text fontFamily="monospace">FAT</Text>
                    </Box>
                    <Box>
                      <Text>
                        {roundNutrient(recipe.totalNutrients.CHOCDF)} g
                      </Text>
                      <Text fontFamily="monospace">CARBS</Text>
                    </Box>
                    <Box>
                      <Text>
                        {roundNutrient(recipe.totalNutrients.CHOLE)} mg
                      </Text>
                      <Text fontFamily="monospace">CHOLESTEROL</Text>
                    </Box>
                    <Box>
                      <Text>{roundNutrient(recipe.totalNutrients.NA)} mg</Text>
                      <Text fontFamily="monospace">SODIUM</Text>
                    </Box>
                  </SimpleGrid>
                </Box>
              )}
            </GridItem>
          </SimpleGrid>
        </VStack>
      </Box>
    </Box>
  );
};

export default RecipePage;

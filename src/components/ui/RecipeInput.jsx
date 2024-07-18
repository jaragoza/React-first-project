import React from "react";
import { Box, Input } from "@chakra-ui/react";

export const RecipeInput = ({ value, onChange }) => {
  return (
    <Box width="100%">
      <Input
        type="text"
        placeholder="Search for recipe"
        value={value}
        onChange={onChange}
        size="lg"
        width="100%"
        bg={"whiteAlpha.900"}
      />
    </Box>
  );
};

export default RecipeInput;

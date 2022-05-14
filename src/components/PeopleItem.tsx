import React from "react";
import { Center, Square, Circle, Box, Heading, Text } from "@chakra-ui/react";
import { PeopleProp } from "./types";

const People = ({ name, gender }: PeopleProp) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" height='52' _hover = { { transform: "scale(1.02)" } } >
      <Heading fontSize="xl">{name}</Heading>
      <Text mt={4}>{gender}</Text>
    </Box>
  );
};

export default People;

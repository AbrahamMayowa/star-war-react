import React from "react";
import { Center, Heading, Text } from "@chakra-ui/react";
import { PeopleProp } from "./types";
import { useNavigate } from "react-router-dom";
import { NAVIGATION } from "../constants";


const People = ({ name, gender, height, mass, homeworld }: PeopleProp) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(NAVIGATION.people, {
      state: { name, gender, height, mass, homeworld },
      replace: false,
    });
  };
  return (
    <Center
      p={5}
      shadow="md"
      borderWidth="1px"
      height="52"
      _hover={{ transform: "scale(1.02)" }}
      borderRadius="lg"
      flexDirection="column"
      onClick={handleNavigation}
    >
      <Heading fontSize="xl">{name}</Heading>
      <Text mt={4}>{gender}</Text>
    </Center>
  );
};

export default People;

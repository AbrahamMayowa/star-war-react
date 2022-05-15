import { Heading, HStack, VStack, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const { state } = useLocation() as any;
  return (
    <VStack w="full" h="full" p={10} spacing={6} align="flex-start">
      <VStack alignItems="flex-start" spacing={3}>
        <Heading size="2xl">{state.name}</Heading>
        <Text color="gray.500">{state.homeworld}</Text>
      </VStack>

      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text>Gender</Text>
          <Heading size="sm">{state.gender}</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text>Height</Text>
          <Heading size="sm">{state.height}</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text>Mass</Text>
          <Heading size="sm">{state.mass}</Heading>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Details;

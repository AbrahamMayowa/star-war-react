import {
  Heading,
  HStack,
  VStack,
  Text,
} from "@chakra-ui/react";

const Details = () => {
  return (
    <VStack w="full" h="full" p={10} spacing={6} align="flex-start">
      <VStack alignItems="flex-start" spacing={3}>
        <Heading size="2xl">Your cart</Heading>
        <Text color='gray.500'>If the price is too hard on your eyes, </Text>
      </VStack>
      
      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text >Subtotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text >Shipping</Text>
          <Heading size="sm">$19.99</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text >Taxes (estimated)</Text>
          <Heading size="sm">$23.80</Heading>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Details;

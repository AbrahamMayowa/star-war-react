import {
    VStack,
    Text,
  } from "@chakra-ui/react";
  import { InfoIcon } from '@chakra-ui/icons'

  const Empty = () => {
      return (
          <VStack w="100%" h='100vh' justifyContent='center' alignItems='center'>
              <InfoIcon w={40} h={50} />
              <Text>No Result Found</Text>
          </VStack>
      );
  };

  export default Empty;
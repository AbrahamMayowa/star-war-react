import React from "react";
import { Center, SkeletonText, SimpleGrid, GridItem, Box } from "@chakra-ui/react";

const Skeleton = () => {
  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      height="52"
      borderRadius="lg"
      flexDirection="column"
    >
      <SkeletonText mt="4" noOfLines={4} spacing="4" />
    </Box>
  );
};

export default Skeleton;

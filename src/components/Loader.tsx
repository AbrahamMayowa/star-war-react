import React from "react";
import {
  Center,
  SkeletonText,
  SimpleGrid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import Skeleton from "./Skeleton";

const Loader = () => {
  const colSpan = useBreakpointValue({ base: 3, md: 1 });
  return (
    <SimpleGrid columns={3} columnGap={3} rowGap={6} w="full">
      <GridItem colSpan={colSpan}>
        <Skeleton/>
      </GridItem>
      <GridItem colSpan={colSpan}>
        <Skeleton />
      </GridItem>
      <GridItem colSpan={colSpan}>
        <Skeleton />
      </GridItem>
      <GridItem colSpan={colSpan}>
        <Skeleton />
      </GridItem>
      <GridItem colSpan={colSpan}>
        <Skeleton />
      </GridItem>
    </SimpleGrid>
  );
};

export default Loader;

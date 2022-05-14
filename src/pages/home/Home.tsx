import React from "react";
import {
  VStack,
  SimpleGrid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import { People } from "../../components";
const Home = () => {
  const colSpan = useBreakpointValue({ base: 3, md: 1 });
  return (
    <VStack
      spacing="24px"
      width="full"
      alignItems={["center", "flex-start"]}
      justifyContent={["center  ", "flex-start"]}
      wrap="wrap"
      direction={["column", "row"]}
    >
      <SimpleGrid columns={3} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={colSpan}>
          <People name="mayowa" gender="Male" />
        </GridItem>
        <GridItem colSpan={colSpan}>
          <People name="mayowa" gender="Male" />
        </GridItem>
        <GridItem colSpan={colSpan}>
          <People name="mayowa" gender="Male" />
        </GridItem>
        <GridItem colSpan={colSpan}>
          <People name="mayowa" gender="Male" />
        </GridItem>
        <GridItem colSpan={colSpan}>
          <People name="mayowa" gender="Male" />
        </GridItem>
        <GridItem colSpan={colSpan}>
          <People name="mayowa" gender="Male" />
        </GridItem>
        <GridItem colSpan={colSpan}>
          <People name="mayowa" gender="Male" />
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Home;

import React from "react";
import {
  VStack,
  SimpleGrid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import { People } from "../../components";
import Footer from './Footer';
import { useQuery } from "@apollo/client";
import { GET_PEOPLES} from "../../store";
const Home = () => {
    const { loading, error, data } = useQuery(GET_PEOPLES);
    console.log(data, error, loading)
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

      <Footer />
    </VStack>
  );
};

export default Home;

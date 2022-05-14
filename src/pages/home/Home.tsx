import { useState } from "react";
import {
  VStack,
  SimpleGrid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import { People, Loader } from "../../components";
import Footer from "./Footer";
import { useQuery } from "@apollo/client";
import { GET_PEOPLES } from "../../store";
import { IPeoples, IPeople } from "./types";
const Home = () => {
  const { loading, data, fetchMore } = useQuery(GET_PEOPLES);
  const peopleData = data?.people as IPeoples;
  const colSpan = useBreakpointValue({ base: 3, md: 1 });
  console.log(peopleData);

  const handlePagination = (offset: number) => {
    fetchMore({
      variables: {
        offset,
      },
    });
  };

  if (loading) {
    return <Loader />;
  }
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
        {peopleData?.peoples.map((item: IPeople) => (
          <GridItem colSpan={colSpan}>
            <People
              name={item.name}
              gender={item.gender}
              height={item.height}
              mass={item.mass}
              homeworld={item.homeworld}
            />
          </GridItem>
        ))}
      </SimpleGrid>

      <Footer handlePagination={handlePagination} next={peopleData.next} />
    </VStack>
  );
};

export default Home;

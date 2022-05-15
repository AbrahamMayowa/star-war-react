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
  const { loading, data, refetch } = useQuery(GET_PEOPLES, {
    notifyOnNetworkStatusChange: true
  });
  const peopleData = data?.people as IPeoples;
  const colSpan = useBreakpointValue({ base: 3, md: 1 });

  const handlePagination = (offset: number) => {
    refetch({
      offset,
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
        {peopleData?.peoples.map((item: IPeople, index: number) => (
          <GridItem colSpan={colSpan} key={index}>
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

      <Footer handlePagination={handlePagination} next={peopleData.next} prev={peopleData.prev} />
    </VStack>
  );
};

export default Home;

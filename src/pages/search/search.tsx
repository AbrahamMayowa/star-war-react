import {
  VStack,
  SimpleGrid,
  useBreakpointValue,
  GridItem,
} from "@chakra-ui/react";
import { People, Loader } from "../../components";
import { useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { SEARCH } from "../../store";
import { IPeople } from "../home/types";
import Empty from "./Empty";

const Search = () => {
  const colSpan = useBreakpointValue({ base: 3, md: 1 });
  const { state } = useLocation() as any;

  const { loading, data } = useQuery(SEARCH, {
    variables: {
      search: state.search,
    },
  });

  const result = data?.search as IPeople[];

  if (loading) {
    return <Loader />;
  } else if (result?.length < 1) {
    return <Empty />;
  } else {
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
          {result.map((item: IPeople, index: number) => (
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
      </VStack>
    );
  }
};

export default Search;

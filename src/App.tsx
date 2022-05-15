import { ChakraProvider, VStack, theme, Container } from "@chakra-ui/react";
import { Home } from "./pages/home";
import { Details } from "./pages/peopleDetails";
import { Search } from "./pages/search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { ApolloClient, InMemoryCache, ApolloProvider,  } from "@apollo/client";
import { NAVIGATION } from "./constants";


export const App = () => {
  const client = new ApolloClient({
    uri: 'https://gd1xi6lbxi.execute-api.us-east-1.amazonaws.com/dev/graphql',
    cache: new InMemoryCache()
  });
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <Container maxW="container.xl" p={0}>
          <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
            <Router>
              <Header />
              <Routes>
                <Route path={NAVIGATION.people} element={<Details />} />
                <Route path={NAVIGATION.search} element={<Search />} />
                <Route path="/" element={<Home />}></Route>
              </Routes>
            </Router>
          </VStack>
        </Container>
      </ApolloProvider>
    </ChakraProvider>
  );
};

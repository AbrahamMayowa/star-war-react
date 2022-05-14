import * as React from "react";
import { ChakraProvider, VStack, theme, Container } from "@chakra-ui/react";
import { Home } from "./pages/home";
import { Details } from "./pages/peopleDetails";
import { Search } from "./pages/search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Container maxW="container.xl" p={0}>
      <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
        <Header />
        <Router>
          <Routes>
            <Route path="people" element={<Details />} />
            <Route path="search" element={<Search />} />
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      </VStack>
    </Container>
  </ChakraProvider>
);

import React from "react";
import {
    Stack,
    Button
  } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Stack direction="row" spacing={4} borderWidth='thin' width='full' p='2' borderRadius='md' justifyContent='space-between'>
      <Button  colorScheme="blue" variant="solid" w='36'>
        Previous
      </Button>
      <Button
        colorScheme="blue"
        variant="solid"
        w='36'
      >
        Next
      </Button>
    </Stack>
  );
};

export default Footer;

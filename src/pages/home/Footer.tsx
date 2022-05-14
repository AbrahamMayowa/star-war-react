import React from "react";
import {
    Stack,
    Button
  } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Stack direction="row" spacing={4}>
      <Button  colorScheme="teal" variant="solid">
        Email
      </Button>
      <Button
        colorScheme="teal"
        variant="outline"
      >
        Call us
      </Button>
    </Stack>
  );
};

export default Footer;

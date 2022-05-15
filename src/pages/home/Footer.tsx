import { Stack, Button } from "@chakra-ui/react";
import { IFooterProps } from "./types";

const Footer = ({ handlePagination, next, prev, offset }: IFooterProps) => {
  let disabledPrev = true;
  let disabledNext = true;
  if (next) {
    disabledNext = false;
  }

  if (prev) {
    disabledPrev = false;
  }

  return (
    <Stack
      direction="row"
      spacing={4}
      borderWidth="thin"
      width="full"
      p="2"
      borderRadius="md"
      justifyContent="space-between"
    >
      <Button
        colorScheme="blue"
        variant="solid"
        w="36"
        disabled={disabledPrev}
        onClick={() => handlePagination(offset-1)}
      >
        Previous
      </Button>
      <Button
        colorScheme="blue"
        variant="solid"
        w="36"
        disabled={disabledNext}
        onClick={() => handlePagination(next)}
      >
        Next
      </Button>
    </Stack>
  );
};

export default Footer;

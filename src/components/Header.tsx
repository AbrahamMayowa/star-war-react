import {
  HStack,
  Image,
  InputGroup,
  InputRightElement,
  Input,
  Button,
} from "@chakra-ui/react";
import starwarLogo from "../assets/images/starwar.svg";

const Header = () => {
  return (
    <HStack
      spacing={6}
      alignItems="center"
      w="full"
      justifyContent="space-between"
    >
      <Image
        src={starwarLogo}
        alt="star-war"
        borderRadius="full"
        boxSize="60px"
      />

      <InputGroup size="md" width="container.sm">
        <Input pr="4.5rem" type={"text"} placeholder="Search people" />
        <InputRightElement width="4.5rem">
          <Button colorScheme="blue">Search</Button>
        </InputRightElement>
      </InputGroup>
    </HStack>
  );
};

export default Header;

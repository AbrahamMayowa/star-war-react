import {
  HStack,
  Image,
  InputGroup,
  InputRightElement,
  Input,
  Button,
} from "@chakra-ui/react";
import starwarLogo from "../assets/images/starwar.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NAVIGATION } from "../constants";

const Header = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<string | null>(null);

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    if (value) {
      navigate(NAVIGATION.search, { state: { search: value } });
    }
  };

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
        <Input
          pr="4.5rem"
          type={"text"}
          placeholder="Search people"
          onChange={handleChange}
        />
        <InputRightElement width="4.5rem">
          <Button colorScheme="blue" onClick={handleSubmit}>Search</Button>
        </InputRightElement>
      </InputGroup>
    </HStack>
  );
};

export default Header;

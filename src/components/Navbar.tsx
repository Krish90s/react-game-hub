import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <HStack>
        <Image src={logo} boxSize="60px" />
        <Text>Games Hub</Text>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;

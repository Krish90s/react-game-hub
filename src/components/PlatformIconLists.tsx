import { HStack, Icon } from "@chakra-ui/react";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";

const PlatformIconLists = ({ platforms }: any) => {
  const iconMap: any = {
    pc: FaWindows,
    plastation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  console.log("platforms", platforms);
  return (
    <>
      <HStack marginY={1}>
        {platforms.map(({ platform }: any) => (
          <Icon as={iconMap[platform.slug]} color={"gray.500"} />
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconLists;

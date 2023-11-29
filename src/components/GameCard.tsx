import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconLists from "./PlatformIconLists";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

const GameCard = ({ game }: any) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconLists platforms={game.parent_platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;

import { Flex } from "@chakra-ui/react";
import { Cities } from "../../components/Cities";
import { Content } from "../../components/Content";
import { ContinentBanner } from "../../components/ContinentBanner";

export default function Europe() {
  return (
    <Flex direction="column">
      <ContinentBanner />
      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
        <Content />
        <Cities />
      </Flex>
    </Flex>
  );
}
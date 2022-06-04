import { Box, Flex, Heading } from "@chakra-ui/react";
import { Banner } from "../components/banner";
import { Slider } from "../components/Slider";
import { TravelTypes } from "../components/travelTypes";

export default function Home() {
  return (
    <Flex direction="column" w="100vw" h="100vh" align="center">
      <Banner />
      <TravelTypes />
      <Box
        w={["60px", "90px"]}
        mx="auto"
        h="2px"
        bg="gray.700"
        my={["9", "20"]}
      ></Box>

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
        color="gray.700"
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Heading>

      <Slider />
    </Flex>
  );
}

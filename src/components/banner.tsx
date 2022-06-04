import { Flex, Image, Stack, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      w="100%"
      height={["163px", "250px", "250px", "20.9375rem"]}
      backgroundImage="url(assets/banner.jpg)"
      backgroundRepeat="no-repeat"
      backgroundPosition={["100% 20%", " 100% 20%", "100% 30%"]}
      backgroundSize="cover"
      alignItems="center"
      justifyContent="space-around"
    >
      <Flex
        justify={["center", "space-between"]}
        align="center"
        w="100%"
        mx="auto"
        px={["4", "10", "15", "20", "36"]}
      >
        <Stack spacing="1.25rem">
          <Text color="white.100" fontSize={["xl", "21", "2xl", "2x1", "4xl"]}>
            5 Continentes, <br /> infinitas possibilidades.
          </Text>
          <Text
            fontSize={["0.8rem", "xl"]}
            color="white.300"
            fontWeight="400"
            maxWidth={["100%", "100%", "100%", "550px"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
          </Text>
        </Stack>
        <Image
          display={["none", "none", "block"]}
          w={["300px", "300px", "300px", "430px"]}
          src="assets/airplane.svg "
          alt="avião"
          transform="rotate(3deg)"
          margin-top="11rem"
        />
      </Flex>
    </Flex>
  );
}

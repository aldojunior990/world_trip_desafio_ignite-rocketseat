import { Flex, Grid, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      width="100vw"
      height="6.25rem"
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100% "
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >
        <Image
          gridColumn="2"
          w={["8rem", "11.5rem"]}
          src="assets/logo.svg"
          alt="logo"
          margin="0 auto"
        />
      </Grid>
    </Flex>
  );
}

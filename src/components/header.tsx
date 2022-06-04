import { Flex, Grid, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiArrowLeftSLine } from "react-icons/ri";

export function Header() {
  const { asPath } = useRouter();

  const Page = asPath != "/";

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
        {Page && (
          <Link href="/">
            <a>
              <Icon
                as={RiArrowLeftSLine}
                fontSize={[20, 40]}
                justifySelf="start"
              />
            </a>
          </Link>
        )}

        <Image
          gridColumn="2"
          w={["8rem", "11.5rem"]}
          src="../logo.svg"
          alt="logo"
          margin="0 auto"
        />
      </Grid>
    </Flex>
  );
}

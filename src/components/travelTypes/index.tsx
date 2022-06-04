import { Grid, GridItem } from "@chakra-ui/react";
import { Container } from "./container";

export function TravelTypes() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      marginTop={["10", "32"]}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <Container icon="cocktail" text="Vida noturna" />
      </GridItem>
      <GridItem>
        <Container icon="beach" text="Praia" />
      </GridItem>
      <GridItem>
        <Container icon="building" text="moderno" />
      </GridItem>
      <GridItem>
        <Container icon="museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Container icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  );
}

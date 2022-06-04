import { Grid, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { City } from "./City";

interface CitiesProps {
  id: number;
  name: string;
  country: string;
  flag: string;
  image: string;
}

export function Cities() {
  const [city, setCity] = useState<CitiesProps[]>([]);

  useEffect(() => {
    fetch("../cities.json").then((response) => {
      response.json().then(setCity);
    });
  }, []);

  console.log(city);

  return (
    <>
      <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">
        Cidades +100
      </Heading>
      <Grid
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px", "0"]}
      >
        {city.map((item) => {
          return (
            <City
              key={item.id}
              country={item.country}
              name={item.name}
              image={item.image}
              flag={item.flag}
            />
          );
        })}
      </Grid>
    </>
  );
}

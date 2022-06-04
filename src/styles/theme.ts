import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      "100": "#FFBA08",
      "200": "rgba(255, 186, 8, 0.5)",
    },
    Dark: {
      "100": "#000000",
    },

    white: {
      "100": "#FFFFFF",
      "300": "#dadada",
      "400": "rgba(153, 153, 153, 0.5)",
      "700": "#47585B",
      "500": "#999999",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "light.100",
        color: "light.80",
        fontFamily: "fonnts.Poppins",
      },
    },
  },
});

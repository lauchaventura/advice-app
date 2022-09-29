import {extendTheme} from "@chakra-ui/react";

export const myNewTheme = extendTheme({
  colors: {
    lightcyan: "hsl(193, 38%, 86%)",
    neongreen: "hsl(150, 100%, 66%)",
    grayishblue: "hsl(217, 19%, 38%)",
    darkgrayishblue: "hsl(217, 19%, 24%)",
    darkblue: "hsl(218, 23%, 16%)",
  },

  fonts: {
    heading: `'Manrope', sans-serif`,
    body: `'Manrope', sans-serif`,
  },
  components: {
    Progress: {
      baseStyle: {
        color: "red",
      },
      defaultProps: {
        colorScheme: "cyan.700",
      },
    },
  },
});

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 900,
      },
    },
  },
  styles: {
    global: {
      html: {
        height: '100vh',
      },
    },
  },
});

export default theme;

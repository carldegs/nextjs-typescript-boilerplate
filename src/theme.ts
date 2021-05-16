import { extendTheme } from '@chakra-ui/react';

interface SetScrollbarParams {
  width: string;
  height: string;
  barBg: string;
  thumbBg: string;
  barHoverBg: string;
  thumbHoverBg: string;
}

const setScrollbar = ({
  width = '12px',
  height = 'inherit',
  barBg = `rgba(0, 0, 0, 0.07)`,
  barHoverBg = `rgba(0, 0, 0, 0.1)`,
  thumbBg = `rgba(0, 0, 0, 0.15)`,
  thumbHoverBg = `rgba(0, 0, 0, 0.2)`,
}: Partial<SetScrollbarParams>): Record<string, any> => ({
  '&::-webkit-scrollbar': {
    width,
    height,
    borderRadius: '12px',
    backgroundColor: barBg,
  },
  '&::-webkit-scrollbar:hover': {
    backgroundColor: barHoverBg,
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: thumbBg,
  },
  '&::-webkit-scrollbar-thumb:hover': {
    backgroundColor: thumbHoverBg,
  },
});

const theme = extendTheme({
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
      body: {
        fontSize: '14px',
        bg: '#FBFBFB',
        overflowY: 'hidden',
      },
      ...setScrollbar({}),
    },
  },
});

export default theme;

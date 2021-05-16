import { Box, Grid } from '@chakra-ui/layout';
import React from 'react';

import Navigation from './Navigation';

const Layout: React.FC = ({ children }) => (
  <Grid gridTemplateRows="auto 1fr" h="100vh" overflowY="hidden">
    <Navigation />
    <Box as="main" overflowY="hidden">
      {children}
    </Box>
  </Grid>
);

export default Layout;

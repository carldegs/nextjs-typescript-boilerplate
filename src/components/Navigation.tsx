import { Avatar } from '@chakra-ui/avatar';
import { Flex, Heading, Spacer, Text } from '@chakra-ui/layout';
import { Menu, MenuItem, MenuList } from '@chakra-ui/menu';
import { Button, Container, FlexProps, MenuButton } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { hideOnMobile } from '../constants';

const NAVBAR_HEIGHT = '60px';

const Navigation: React.FC<
  FlexProps & { hideNav?: boolean; hideLogin?: boolean }
> = ({ children, hideNav, hideLogin, ...props }) => {
  const router = useRouter();
  const [isLoggedIn, setLoggedIn] = useState(true);
  const username = 'lorem.ipsum';

  return (
    <Container maxW="container.xl">
      <Flex
        as="header"
        alignItems="center"
        h={NAVBAR_HEIGHT}
        w="full"
        pos="sticky"
        top={0}
        {...props}
      >
        <Heading
          color="cyan.700"
          fontSize={{ base: 'xl', lg: '2xl' }}
          onClick={() => router.push('/')}
          cursor="pointer"
        >
          TEST
        </Heading>

        <Spacer />

        {isLoggedIn ? (
          <Menu>
            <MenuButton>
              <Flex cursor="pointer" alignItems="center">
                <Avatar size="sm" name={username} mr={{ base: 0, lg: 2 }} />
                <Text
                  color="cyan.100"
                  lineHeight="32px"
                  verticalAlign="middle"
                  fontWeight="medium"
                  {...hideOnMobile}
                >
                  {username}
                </Text>
              </Flex>
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => setLoggedIn(false)}>Logout</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Button onClick={() => setLoggedIn(true)}>Login</Button>
        )}
      </Flex>
    </Container>
  );
};

export default Navigation;

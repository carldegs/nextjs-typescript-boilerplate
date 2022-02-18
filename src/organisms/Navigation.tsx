import { Avatar } from '@chakra-ui/avatar';
import { Divider, Flex, Heading, Spacer, Text } from '@chakra-ui/layout';
import { Menu, MenuItem, MenuList } from '@chakra-ui/menu';
import { MenuButton } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const NAVBAR_HEIGHT = '60px';

const Navigation: React.FC = () => {
  const router = useRouter();
  const name = 'lorem.ipsum';

  return (
    <Flex
      as="header"
      alignItems="center"
      justifyContent="center"
      h={NAVBAR_HEIGHT}
      w="full"
      position="sticky"
      bg="gray.900"
    >
      <Heading
        color="white"
        fontSize="3xl"
        ml={4}
        onClick={() => router.push('/')}
        cursor="pointer"
      >
        Site Title
      </Heading>

      <Spacer />

      <Divider orientation="vertical" h={NAVBAR_HEIGHT} />
      <Menu>
        <MenuButton>
          <Flex mx={4} cursor="pointer" alignItems="center">
            <Avatar size="sm" name={name} mr={2} />
            <Text
              color="white"
              lineHeight="32px"
              verticalAlign="middle"
              mr={4}
              fontWeight="medium"
            >
              {name}
            </Text>
          </Flex>
        </MenuButton>
        <MenuList>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Navigation;

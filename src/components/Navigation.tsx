import { Flex, Heading, Text } from '@chakra-ui/layout';
import { Container, FlexProps, Spacer } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const NAVBAR_HEIGHT = '60px';

const Navigation: React.FC<FlexProps> = (props) => {
  const router = useRouter();

  return (
    <Container maxW="container.xl">
      <Flex
        as="header"
        alignItems="center"
        justifyContent="center"
        bg="gray.900"
        h={NAVBAR_HEIGHT}
        w="full"
        position="sticky"
        top={0}
        {...props}
      >
        <Heading
          color="cyan.700"
          fontSize={{ base: 'xl', lg: '2xl' }}
          onClick={() => router.push('/')}
          cursor="pointer"
        >
          Create Next App
        </Heading>
        <Spacer />
        <Text color="cyan.700">User</Text>
      </Flex>
    </Container>
  );
};

export default Navigation;

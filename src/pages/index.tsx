import { Box, Flex, Heading, Button, Text } from '@chakra-ui/react';
import { Fragment } from 'react';
import { useAuth } from '../utils/auth';
export default function Index() {
  const auth = useAuth();
  return (
    <Box height="100vh">
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Heading>Welcome to the app!</Heading>
        {auth.user ? (
          <Fragment>
            <Text>{auth.user.name}</Text>
            <Button onClick={(e) => auth.signout()}>Sign Out</Button>
          </Fragment>
        ) : (
          <Button onClick={(e) => auth.signinWithGoogle()}>Sign In</Button>
        )}
      </Flex>
    </Box>
  );
}

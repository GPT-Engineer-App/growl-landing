import { Container, Text, VStack, Button, Heading, Box, Image, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Input } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Box boxSize="300px" borderRadius="15px">
          <Image src="https://images.unsplash.com/photo-1470165473874-023613603389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b2xmJTIwbG9nb3xlbnwwfHx8fDE3MTc2MjUzMTV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="GoWolf Logo" />
        </Box>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to GoWolf
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Unleash your potential with our innovative solutions.
        </Text>
        <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
          Join the wolfpack
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;

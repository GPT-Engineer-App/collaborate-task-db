import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.jsx";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" minHeight="100vh" p={useBreakpointValue({ base: 4, md: 8 })} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Breadcrumbs />
      <VStack spacing={4}>
        <Text fontSize="2xl">Your Blank Canvas</Text>
        <Text>Chat with the agent to start making edits.</Text>
        <Button as={Link} to="/database-optimization" colorScheme="teal" size="lg">Go to Database Optimization</Button>
      </VStack>
    </Container>
  );
};

export default Index;
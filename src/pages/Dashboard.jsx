import { Box, Heading, VStack, Text } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Box p={4}>
      <Heading as="h1" mb={6}>Dashboard</Heading>
      <VStack spacing={4} align="start">
        <Text fontSize="lg">Summary of tasks, groups, and user activities will be displayed here.</Text>
      </VStack>
    </Box>
  );
};

export default Dashboard;
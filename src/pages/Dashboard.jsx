import { Box, Heading, VStack, Text, useBreakpointValue } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Box p={useBreakpointValue({ base: 4, md: 8 })}>
      <Heading as="h1" mb={6}>Dashboard</Heading>
      <VStack spacing={4} align="start">
        <Text fontSize="lg">Summary of tasks, groups, and user activities will be displayed here.</Text>
      </VStack>
    </Box>
  );
};

export default Dashboard;
import { Box, Heading, VStack, Text, useBreakpointValue, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <Box p={useBreakpointValue({ base: 4, md: 8 })}>
      <Heading as="h1" mb={6}>Dashboard</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} mb={8}>
        <Stat>
          <StatLabel>Tasks Completed</StatLabel>
          <StatNumber>45</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>New Groups</StatLabel>
          <StatNumber>5</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Files Uploaded</StatLabel>
          <StatNumber>123</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            18.45%
          </StatHelpText>
        </Stat>
      </SimpleGrid>
      <Divider mb={8} />
      <VStack spacing={4} align="start">
        <Heading as="h2" size="lg">Recent Activities</Heading>
        <Text>Task "Design Homepage" was completed by John Doe.</Text>
        <Text>New group "Marketing Team" was created.</Text>
        <Text>File "project-plan.pdf" was uploaded.</Text>
      </VStack>
      <Divider my={8} />
      <VStack spacing={4} align="start">
        <Heading as="h2" size="lg">Quick Access</Heading>
        <Text as={Link} to="/task-management" color="teal.500">Manage Tasks</Text>
        <Text as={Link} to="/group-management" color="teal.500">Manage Groups</Text>
        <Text as={Link} to="/file-management" color="teal.500">Manage Files</Text>
        <Text as={Link} to="/user-profiles" color="teal.500">Manage Profiles</Text>
      </VStack>
    </Box>
  );
};

export default Dashboard;
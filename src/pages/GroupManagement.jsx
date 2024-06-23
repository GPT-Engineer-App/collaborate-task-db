import { Box, Heading, VStack, Text, Input, Button, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";

const GroupManagement = () => {
  const [groups, setGroups] = useState([]);
  const [newGroup, setNewGroup] = useState("");

  const handleAddGroup = () => {
    setGroups([...groups, newGroup]);
    setNewGroup("");
  };

  return (
    <Box p={useBreakpointValue({ base: 4, md: 8 })}>
      <Heading as="h1" mb={6}>Group Management</Heading>
      <VStack spacing={4} align="start">
        <Input placeholder="New Group" value={newGroup} onChange={(e) => setNewGroup(e.target.value)} />
        <Button colorScheme="blue" onClick={handleAddGroup}>Add Group</Button>
        <VStack spacing={2} align="start">
          {groups.map((group, index) => (
            <Text key={index}>{group}</Text>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default GroupManagement;
import { Box, Heading, VStack, Text, Input, Button, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import { notify } from "../components/Notification.jsx";

const SessionManagement = () => {
  const [sessions, setSessions] = useState([]);
  const [newSession, setNewSession] = useState("");

  const handleAddSession = () => {
    setSessions([...sessions, newSession]);
    setNewSession("");
    notify("Session added successfully!", "success");
  };

  return (
    <Box p={useBreakpointValue({ base: 4, md: 8 })}>
      <Heading as="h1" mb={6}>Session Management</Heading>
      <VStack spacing={4} align="start">
        <Input placeholder="New Session" value={newSession} onChange={(e) => setNewSession(e.target.value)} />
        <Button colorScheme="blue" onClick={handleAddSession}>Add Session</Button>
        <VStack spacing={2} align="start">
          {sessions.map((session, index) => (
            <Text key={index}>{session}</Text>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default SessionManagement;
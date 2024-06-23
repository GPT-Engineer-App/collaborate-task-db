import { useState, useEffect } from "react";
import io from "socket.io-client";
import { Box, VStack, Input, Button, Text, useBreakpointValue } from "@chakra-ui/react";

const socket = io("http://localhost:3000");

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  const handleSendMessage = () => {
    socket.emit("message", newMessage);
    setNewMessage("");
  };

  return (
    <Box p={useBreakpointValue({ base: 4, md: 8 })} borderWidth={1} borderRadius="lg">
      <VStack spacing={4} align="start">
        {messages.map((message, index) => (
          <Text key={index}>{message}</Text>
        ))}
        <Input
          placeholder="Type a message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <Button colorScheme="blue" onClick={handleSendMessage}>
          Send
        </Button>
      </VStack>
    </Box>
  );
};

export default Chat;
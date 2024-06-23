import { useState } from "react";
import { WebClient } from "@slack/web-api";
import { Box, Button, Input, VStack, Text } from "@chakra-ui/react";

const slackClient = new WebClient("YOUR_SLACK_BOT_TOKEN");

const SlackIntegration = () => {
  const [channel, setChannel] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSendMessage = async () => {
    try {
      const res = await slackClient.chat.postMessage({
        channel: channel,
        text: message,
      });
      setResponse(`Message sent: ${res.ts}`);
    } catch (error) {
      setResponse(`Error: ${error.message}`);
    }
  };

  return (
    <Box p={4} borderWidth={1} borderRadius="lg">
      <VStack spacing={4} align="start">
        <Input
          placeholder="Channel ID"
          value={channel}
          onChange={(e) => setChannel(e.target.value)}
        />
        <Input
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button colorScheme="blue" onClick={handleSendMessage}>
          Send Message to Slack
        </Button>
        {response && <Text>{response}</Text>}
      </VStack>
    </Box>
  );
};

export default SlackIntegration;
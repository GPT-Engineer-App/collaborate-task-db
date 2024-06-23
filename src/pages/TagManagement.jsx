import { Box, Heading, VStack, Text, Input, Button, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";

const TagManagement = () => {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const handleAddTag = () => {
    setTags([...tags, newTag]);
    setNewTag("");
  };

  return (
    <Box p={useBreakpointValue({ base: 4, md: 8 })}>
      <Heading as="h1" mb={6}>Tag Management</Heading>
      <VStack spacing={4} align="start">
        <Input placeholder="New Tag" value={newTag} onChange={(e) => setNewTag(e.target.value)} />
        <Button colorScheme="blue" onClick={handleAddTag}>Add Tag</Button>
        <VStack spacing={2} align="start">
          {tags.map((tag, index) => (
            <Text key={index}>{tag}</Text>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default TagManagement;
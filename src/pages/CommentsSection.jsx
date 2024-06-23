import { Box, Heading, VStack, Text, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const CommentsSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    setComments([...comments, newComment]);
    setNewComment("");
  };

  return (
    <Box p={useBreakpointValue({ base: 4, md: 8 })}>
      <Heading as="h1" mb={6}>Comments Section</Heading>
      <VStack spacing={4} align="start">
        <Input placeholder="New Comment" value={newComment} onChange={(e) => setNewComment(e.target.value)} />
        <Button colorScheme="blue" onClick={handleAddComment}>Add Comment</Button>
        <VStack spacing={2} align="start">
          {comments.map((comment, index) => (
            <Text key={index}>{comment}</Text>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default CommentsSection;
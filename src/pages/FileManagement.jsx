import { Box, Heading, VStack, Text, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const FileManagement = () => {
  const [files, setFiles] = useState([]);
  const [newFile, setNewFile] = useState("");

  const handleUploadFile = () => {
    setFiles([...files, newFile]);
    setNewFile("");
  };

  return (
    <Box p={4}>
      <Heading as="h1" mb={6}>File Management</Heading>
      <VStack spacing={4} align="start">
        <Input placeholder="New File" value={newFile} onChange={(e) => setNewFile(e.target.value)} />
        <Button colorScheme="blue" onClick={handleUploadFile}>Upload File</Button>
        <VStack spacing={2} align="start">
          {files.map((file, index) => (
            <Text key={index}>{file}</Text>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default FileManagement;
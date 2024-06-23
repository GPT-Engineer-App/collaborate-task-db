import { Box, Heading, VStack, Text, Input, Button, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import { notify } from "../components/Notification.jsx";

const FileManagement = () => {
  const [files, setFiles] = useState([]);
  const [newFile, setNewFile] = useState("");

  const handleUploadFile = () => {
    setFiles([...files, newFile]);
    setNewFile("");
    notify("File uploaded successfully!", "success");
  };

  return (
    <Box p={useBreakpointValue({ base: 4, md: 8 })}>
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
import { useState } from "react";
import { Box, VStack, Input, Button, Text, useBreakpointValue } from "@chakra-ui/react";

const FileSharing = () => {
  const [files, setFiles] = useState([]);
  const [newFile, setNewFile] = useState(null);

  const handleFileChange = (e) => {
    setNewFile(e.target.files[0]);
  };

  const handleUploadFile = () => {
    if (newFile) {
      setFiles([...files, newFile]);
      setNewFile(null);
    }
  };

  return (
    <Box p={useBreakpointValue({ base: 2, md: 4 })} borderWidth={1} borderRadius="lg">
      <VStack spacing={4} align="start">
        {files.map((file, index) => (
          <Text key={index}>{file.name}</Text>
        ))}
        <Input type="file" onChange={handleFileChange} size={useBreakpointValue({ base: "sm", md: "md" })} />
        <Button colorScheme="blue" onClick={handleUploadFile} size={useBreakpointValue({ base: "sm", md: "md" })}>
          Upload File
        </Button>
      </VStack>
    </Box>
  );
};

export default FileSharing;
import { useState } from "react";
import { Box, VStack, Input, Button, Text } from "@chakra-ui/react";

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
    <Box p={4} borderWidth={1} borderRadius="lg">
      <VStack spacing={4} align="start">
        {files.map((file, index) => (
          <Text key={index}>{file.name}</Text>
        ))}
        <Input type="file" onChange={handleFileChange} />
        <Button colorScheme="blue" onClick={handleUploadFile}>
          Upload File
        </Button>
      </VStack>
    </Box>
  );
};

export default FileSharing;
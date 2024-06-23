import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Box, useBreakpointValue } from "@chakra-ui/react";

const CollaborativeEditor = () => {
  const [content, setContent] = useState("");

  const handleChange = (value) => {
    setContent(value);
  };

  return (
    <Box p={useBreakpointValue({ base: 4, md: 8 })} borderWidth={1} borderRadius="lg">
      <ReactQuill value={content} onChange={handleChange} />
    </Box>
  );
};

export default CollaborativeEditor;
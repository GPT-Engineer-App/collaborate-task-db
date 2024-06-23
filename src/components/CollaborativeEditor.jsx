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
    <Box p={useBreakpointValue({ base: 2, md: 4 })} borderWidth={1} borderRadius="lg">
      <ReactQuill value={content} onChange={handleChange} />
    </Box>
  );
};

export default CollaborativeEditor;
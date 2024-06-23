import { useState } from "react";
import { GoogleDrivePicker } from "react-google-drive-picker";
import { Box, Button, Text, useBreakpointValue } from "@chakra-ui/react";

const GoogleDriveIntegration = () => {
  const [files, setFiles] = useState([]);

  const handleFileSelect = (data) => {
    setFiles(data.docs);
  };

  return (
    <Box p={useBreakpointValue({ base: 2, md: 4 })} borderWidth={1} borderRadius="lg">
      <GoogleDrivePicker
        clientId="YOUR_GOOGLE_CLIENT_ID"
        developerKey="YOUR_GOOGLE_DEVELOPER_KEY"
        scope={["https://www.googleapis.com/auth/drive.readonly"]}
        onChange={handleFileSelect}
        onAuthFailed={(data) => console.log("on auth failed:", data)}
        multiselect={true}
        navHidden={true}
        authImmediate={false}
        viewId={"DOCS"}
      >
        <Button colorScheme="blue" size={useBreakpointValue({ base: "sm", md: "md" })}>Select Files from Google Drive</Button>
      </GoogleDrivePicker>
      <Box mt={4}>
        {files.map((file, index) => (
          <Text key={index}>{file.name}</Text>
        ))}
      </Box>
    </Box>
  );
};

export default GoogleDriveIntegration;
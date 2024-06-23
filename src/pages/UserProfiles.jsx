import { Box, Heading, VStack, Text, Input, Button, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import { notify } from "../components/Notification.jsx";

const UserProfiles = () => {
  const [profile, setProfile] = useState({ avatar: "", bio: "" });

  const handleUpdateProfile = () => {
    console.log("Profile updated:", profile);
    notify("Profile updated successfully!", "success");
  };

  return (
    <Box p={useBreakpointValue({ base: 4, md: 8 })}>
      <Heading as="h1" mb={6}>User Profiles</Heading>
      <VStack spacing={4} align="start">
        <Input placeholder="Avatar URL" value={profile.avatar} onChange={(e) => setProfile({ ...profile, avatar: e.target.value })} />
        <Input placeholder="Bio" value={profile.bio} onChange={(e) => setProfile({ ...profile, bio: e.target.value })} />
        <Button colorScheme="blue" onClick={handleUpdateProfile}>Update Profile</Button>
      </VStack>
    </Box>
  );
};

export default UserProfiles;
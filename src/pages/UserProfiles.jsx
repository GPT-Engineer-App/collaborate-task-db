import { Box, Heading, VStack, Text, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const UserProfiles = () => {
  const [profile, setProfile] = useState({ avatar: "", bio: "" });

  const handleUpdateProfile = () => {
    // Placeholder for update logic
    console.log("Profile updated:", profile);
  };

  return (
    <Box p={4}>
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
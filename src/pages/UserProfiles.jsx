import { Box, Heading, VStack, Text, Input, Button, useBreakpointValue, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useState } from "react";
import { notify } from "../components/Notification.jsx";

const UserProfiles = () => {
  const [profile, setProfile] = useState({
    avatar: "",
    name: "",
    email: "",
    bio: "",
    preferences: "",
    settings: ""
  });

  const handleUpdateProfile = () => {
    console.log("Profile updated:", profile);
    notify("Profile updated successfully!", "success");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile({ ...profile, avatar: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <Box p={useBreakpointValue({ base: 4, md: 8 })}>
      <Heading as="h1" mb={6}>User Profiles</Heading>
      <VStack spacing={4} align="start">
        <FormControl>
          <FormLabel>Profile Picture</FormLabel>
          <Input type="file" onChange={handleFileChange} />
          {profile.avatar && <img src={profile.avatar} alt="Profile" width="100" />}
        </FormControl>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Name" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input placeholder="Email" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
        </FormControl>
        <Input placeholder="Bio" value={profile.bio} onChange={(e) => setProfile({ ...profile, bio: e.target.value })} />
        <FormControl>
          <FormLabel>Bio</FormLabel>
          <Input placeholder="Bio" value={profile.bio} onChange={(e) => setProfile({ ...profile, bio: e.target.value })} />
        </FormControl>
        <FormControl>
          <FormLabel>Preferences</FormLabel>
          <Select placeholder="Select preference" value={profile.preferences} onChange={(e) => setProfile({ ...profile, preferences: e.target.value })}>
            <option value="preference1">Preference 1</option>
            <option value="preference2">Preference 2</option>
            <option value="preference3">Preference 3</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Settings</FormLabel>
          <Input placeholder="Settings" value={profile.settings} onChange={(e) => setProfile({ ...profile, settings: e.target.value })} />
        </FormControl>
        <Button colorScheme="blue" onClick={handleUpdateProfile}>Update Profile</Button>
      </VStack>
    </Box>
  );
};

export default UserProfiles;
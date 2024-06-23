import { Box, Flex, Input, InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import NavLink from "./NavLink.jsx";

const Navbar = () => {
  return (
    <Box bg="blue.500" color="white" px={4} py={2} position="fixed" top="0" width="100%" zIndex="1000">
      <Flex justify="space-between" align="center">
        <Flex>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/task-management">Tasks</NavLink>
          <NavLink to="/group-management">Groups</NavLink>
          <NavLink to="/file-management">Files</NavLink>
          <NavLink to="/user-profiles">Profile</NavLink>
        </Flex>
        <InputGroup width="300px">
          <Input placeholder="Search tasks and files" />
          <InputRightElement>
            <IconButton aria-label="Search" icon={<SearchIcon />} />
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default Navbar;
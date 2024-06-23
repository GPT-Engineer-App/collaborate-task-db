import { Box, Flex, Link, Input, InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="blue.500" color="white" px={4} py={2} position="fixed" top="0" width="100%" zIndex="1000">
      <Flex justify="space-between" align="center">
        <Flex>
          <Link as={RouterLink} to="/dashboard" mx={2}>Dashboard</Link>
          <Link as={RouterLink} to="/task-management" mx={2}>Tasks</Link>
          <Link as={RouterLink} to="/group-management" mx={2}>Groups</Link>
          <Link as={RouterLink} to="/file-management" mx={2}>Files</Link>
          <Link as={RouterLink} to="/user-profiles" mx={2}>Profile</Link>
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
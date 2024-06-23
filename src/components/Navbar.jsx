import { Box, Flex, Input, InputGroup, InputRightElement, IconButton, Select, useBreakpointValue, useDisclosure, Collapse, Button } from "@chakra-ui/react";
import { SearchIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NavLink from "./NavLink.jsx";
import { useState } from "react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const { isOpen, onToggle } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSearch = () => {
    console.log(`Searching for ${searchQuery} with filter ${filter}`);
  };

  return (
    <Box bg="blue.500" color="white" px={4} py={2} position="fixed" top="0" width="100%" zIndex="1000">
      <Flex justify="space-between" align="center">
        <Flex display={{ base: "none", md: "flex" }}>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/task-management">Tasks</NavLink>
          <NavLink to="/group-management">Groups</NavLink>
          <NavLink to="/file-management">Files</NavLink>
          <NavLink to="/user-profiles">Profile</NavLink>
        </Flex>
        <Flex>
          <Select placeholder="Filter" value={filter} onChange={handleFilterChange} bg="white" color="black" mr={2}>
            <option value="all">All</option>
            <option value="tasks">Tasks</option>
            <option value="files">Files</option>
            <option value="groups">Groups</option>
            <option value="profiles">Profiles</option>
          </Select>
          <InputGroup width={{ base: "200px", md: "300px" }}>
            <Input placeholder="Search tasks and files" value={searchQuery} onChange={handleSearchChange} />
            <InputRightElement>
              <IconButton aria-label="Search" icon={<SearchIcon />} onClick={handleSearch} />
            </InputRightElement>
          </InputGroup>
        </Flex>
        {isMobile && (
          <IconButton
            aria-label="Toggle Navigation"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={onToggle}
            ml={2}
          />
        )}
      </Flex>
      {isMobile && (
        <Collapse in={isOpen} animateOpacity>
          <Flex direction="column" mt={4}>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/task-management">Tasks</NavLink>
            <NavLink to="/group-management">Groups</NavLink>
            <NavLink to="/file-management">Files</NavLink>
            <NavLink to="/user-profiles">Profile</NavLink>
          </Flex>
        </Collapse>
      )}
    </Box>
  );
};

export default Navbar;
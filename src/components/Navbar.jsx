import { Box, Flex, Input, InputGroup, InputRightElement, IconButton, Select } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import NavLink from "./NavLink.jsx";

import { useState } from "react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSearch = () => {
    // Implement search logic here
    console.log(`Searching for ${searchQuery} with filter ${filter}`);
  };
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
        <Flex>
          <Select placeholder="Filter" value={filter} onChange={handleFilterChange} bg="white" color="black" mr={2}>
            <option value="all">All</option>
            <option value="tasks">Tasks</option>
            <option value="files">Files</option>
            <option value="groups">Groups</option>
            <option value="profiles">Profiles</option>
          </Select>
          <InputGroup width="300px">
            <Input placeholder="Search tasks and files" value={searchQuery} onChange={handleSearchChange} />
            <InputRightElement>
              <IconButton aria-label="Search" icon={<SearchIcon />} onClick={handleSearch} />
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
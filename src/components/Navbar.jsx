import { Box, Flex, Input, InputGroup, InputRightElement, IconButton, Select, useBreakpointValue } from "@chakra-ui/react";
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
  const selectSize = useBreakpointValue({ base: "sm", md: "md" });
  const inputGroupWidth = useBreakpointValue({ base: "200px", md: "300px" });
  const inputSize = useBreakpointValue({ base: "sm", md: "md" });
  const iconButtonSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <Box bg="blue.500" color="white" px={4} py={2} position="fixed" top="0" width="100%" zIndex="1000">
      <Flex justify="space-between" align="center" wrap="wrap">
        <Flex align="center" wrap="wrap">
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/task-management">Tasks</NavLink>
          <NavLink to="/group-management">Groups</NavLink>
          <NavLink to="/file-management">Files</NavLink>
          <NavLink to="/user-profiles">Profile</NavLink>
          <NavLink to="/google-drive-integration">Google Drive</NavLink>
          <NavLink to="/slack-integration">Slack</NavLink>
          <NavLink to="/trello-integration">Trello</NavLink>
        </Flex>
        <Flex mt={{ base: 2, md: 0 }} align="center" wrap="wrap">
          <Select placeholder="Filter" value={filter} onChange={handleFilterChange} bg="white" color="black" mr={2} size={selectSize}>
            <option value="all">All</option>
            <option value="tasks">Tasks</option>
            <option value="files">Files</option>
            <option value="groups">Groups</option>
            <option value="profiles">Profiles</option>
          </Select>
          <InputGroup width={inputGroupWidth}>
            <Input placeholder="Search tasks and files" value={searchQuery} onChange={handleSearchChange} size={inputSize} />
            <InputRightElement>
              <IconButton aria-label="Search" icon={<SearchIcon />} onClick={handleSearch} size={iconButtonSize} />
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
import { Box, VStack, Button, Collapse, useDisclosure, Select, Input, useBreakpointValue } from "@chakra-ui/react";
import SidebarLink from "./SidebarLink.jsx";

import { useState } from "react";

const Sidebar = () => {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const { isOpen, onToggle } = useDisclosure();
  
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    // Implement search logic here
    console.log(`Searching for ${searchQuery} with filter ${filter}`);
  };
  return (
    <Box bg="gray.100" width={useBreakpointValue({ base: "100%", md: "250px" })} position="fixed" top="60px" bottom="0" overflowY="auto">
      <VStack align="start" p={4}>
        <Button onClick={onToggle} width="100%">
          {isOpen ? "Hide Filters" : "Show Filters"}
        </Button>
        <Collapse in={isOpen} animateOpacity>
          <VStack align="start" spacing={2} width="100%">
            <Select placeholder="Filter" value={filter} onChange={handleFilterChange} bg="white" color="black">
              <option value="all">All</option>
              <option value="tasks">Tasks</option>
              <option value="files">Files</option>
              <option value="groups">Groups</option>
              <option value="profiles">Profiles</option>
            </Select>
            <Input placeholder="Search" value={searchQuery} onChange={handleSearchChange} bg="white" color="black" />
            <Button colorScheme="blue" onClick={handleSearch} width="100%">Search</Button>
          </VStack>
        </Collapse>
        <SidebarLink to="/recent-activities">Recent Activities</SidebarLink>
        <SidebarLink to="/notifications">Notifications</SidebarLink>
      </VStack>
    </Box>
  );
};

export default Sidebar;
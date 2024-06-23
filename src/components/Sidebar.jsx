import { Box, VStack, Button, Collapse, useDisclosure } from "@chakra-ui/react";
import SidebarLink from "./SidebarLink.jsx";

const Sidebar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg="gray.100" width="250px" position="fixed" top="60px" bottom="0" overflowY="auto">
      <VStack align="start" p={4}>
        <Button onClick={onToggle} width="100%">
          {isOpen ? "Hide Filters" : "Show Filters"}
        </Button>
        <Collapse in={isOpen} animateOpacity>
          <VStack align="start" spacing={2}>
            <SidebarLink to="/task-management?filter=category">Filter by Category</SidebarLink>
            <SidebarLink to="/task-management?filter=priority">Filter by Priority</SidebarLink>
            <SidebarLink to="/task-management?filter=status">Filter by Status</SidebarLink>
          </VStack>
        </Collapse>
        <SidebarLink to="/recent-activities">Recent Activities</SidebarLink>
        <SidebarLink to="/notifications">Notifications</SidebarLink>
      </VStack>
    </Box>
  );
};

export default Sidebar;
import { Box, VStack, Link, Button, Collapse, useDisclosure } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

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
            <Link as={RouterLink} to="/task-management?filter=category" width="100%">Filter by Category</Link>
            <Link as={RouterLink} to="/task-management?filter=priority" width="100%">Filter by Priority</Link>
            <Link as={RouterLink} to="/task-management?filter=status" width="100%">Filter by Status</Link>
          </VStack>
        </Collapse>
        <Link as={RouterLink} to="/recent-activities" width="100%">Recent Activities</Link>
        <Link as={RouterLink} to="/notifications" width="100%">Notifications</Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
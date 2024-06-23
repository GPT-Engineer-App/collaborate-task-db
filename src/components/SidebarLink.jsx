import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

const SidebarLink = ({ to, children }) => {
  return (
    <Link 
      as={RouterLink} 
      to={to} 
      width="100%"
      _hover={{ textDecoration: "underline", color: "blue.300" }}
      transition="color 0.2s"
    >
      {children}
    </Link>
  );
};

export default SidebarLink;
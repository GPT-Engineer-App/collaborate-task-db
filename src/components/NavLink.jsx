import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

const NavLink = ({ to, children }) => {
  return (
    <Link 
      as={RouterLink} 
      to={to} 
      mx={{ base: 1, md: 2 }} 
      fontSize={{ base: "sm", md: "md" }}
      _hover={{ textDecoration: "underline", color: "blue.300" }}
      transition="color 0.2s"
    >
      {children}
    </Link>
  );
};

export default NavLink;
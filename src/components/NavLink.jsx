import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

const NavLink = ({ to, children }) => {
  return (
    <Link as={RouterLink} to={to} mx={2}>
      {children}
    </Link>
  );
};

export default NavLink;
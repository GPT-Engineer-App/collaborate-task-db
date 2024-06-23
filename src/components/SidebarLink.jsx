import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

const SidebarLink = ({ to, children }) => {
  return (
    <Link as={RouterLink} to={to} width="100%">
      {children}
    </Link>
  );
};

export default SidebarLink;
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumb fontSize={{ base: "sm", md: "md", lg: "lg" }} spacing="8px">
      <BreadcrumbItem isCurrentPage={location.pathname === "/"}>
        <BreadcrumbLink as={RouterLink} to="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        return (
          <BreadcrumbItem key={to} isCurrentPage={location.pathname === to}>
            <BreadcrumbLink as={RouterLink} to={to}>{value}</BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
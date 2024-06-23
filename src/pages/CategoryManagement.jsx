import { Box, Heading, VStack, Text, Input, Button, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import { notify } from "../components/Notification.jsx";

const CategoryManagement = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = () => {
    setCategories([...categories, newCategory]);
    setNewCategory("");
    notify("Category added successfully!", "success");
  };

  return (
    <Box p={useBreakpointValue({ base: 4, md: 8 })}>
      <Heading as="h1" mb={6}>Category Management</Heading>
      <VStack spacing={4} align="start">
        <Input placeholder="New Category" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
        <Button colorScheme="blue" onClick={handleAddCategory}>Add Category</Button>
        <VStack spacing={2} align="start">
          {categories.map((category, index) => (
            <Text key={index}>{category}</Text>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default CategoryManagement;
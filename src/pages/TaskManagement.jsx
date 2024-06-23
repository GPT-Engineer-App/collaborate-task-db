import { Box, Heading, VStack, Text, Button, Input, Select } from "@chakra-ui/react";
import { useState } from "react";

const TaskManagement = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  return (
    <Box p={4}>
      <Heading as="h1" mb={6}>Task Management</Heading>
      <VStack spacing={4} align="start">
        <Input placeholder="New Task" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <Button colorScheme="blue" onClick={handleAddTask}>Add Task</Button>
        <Select placeholder="Filter tasks">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </Select>
        <VStack spacing={2} align="start">
          {tasks.map((task, index) => (
            <Text key={index}>{task}</Text>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default TaskManagement;
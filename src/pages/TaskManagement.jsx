import { Box, Heading, VStack, Text, Button, Input, Select, useBreakpointValue } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

const TaskManagement = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    socket.on("tasks", (updatedTasks) => {
      setTasks(updatedTasks);
    });

    return () => {
      socket.off("tasks");
    };
  }, []);

  const handleAddTask = () => {
    const updatedTasks = [...tasks, { id: tasks.length + 1, content: newTask, status: "pending" }];
    setTasks(updatedTasks);
    setNewTask("");
    socket.emit("updateTasks", updatedTasks);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const updatedTasks = Array.from(tasks);
    const [reorderedTask] = updatedTasks.splice(result.source.index, 1);
    updatedTasks.splice(result.destination.index, 0, reorderedTask);

    setTasks(updatedTasks);
    socket.emit("updateTasks", updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => filter === "all" || task.status === filter);

  return (
    <Box p={useBreakpointValue({ base: 4, md: 8 })}>
      <Heading as="h1" mb={6}>Task Management</Heading>
      <VStack spacing={4} align="start">
        <Input placeholder="New Task" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <Button colorScheme="blue" onClick={handleAddTask}>Add Task</Button>
        <Select placeholder="Filter tasks" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </Select>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="tasks">
            {(provided) => (
              <VStack {...provided.droppableProps} ref={provided.innerRef} spacing={2} align="start">
                {filteredTasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                    {(provided) => (
                      <Box ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} p={4} bg="gray.100" width="100%">
                        <Text>{task.content}</Text>
                      </Box>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </VStack>
            )}
          </Droppable>
        </DragDropContext>
      </VStack>
    </Box>
  );
};

export default TaskManagement;
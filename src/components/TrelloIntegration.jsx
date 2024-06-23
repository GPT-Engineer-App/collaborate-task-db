import { useState } from "react";
import { TrelloBoard } from "react-trello";
import { Box, Button, Input, VStack, useBreakpointValue } from "@chakra-ui/react";

const TrelloIntegration = () => {
  const [boardData, setBoardData] = useState({
    lanes: [
      {
        id: "lane1",
        title: "To Do",
        cards: [],
      },
      {
        id: "lane2",
        title: "In Progress",
        cards: [],
      },
      {
        id: "lane3",
        title: "Done",
        cards: [],
      },
    ],
  });

  const handleAddCard = (laneId, cardTitle) => {
    const newCard = { id: `Card${Date.now()}`, title: cardTitle };
    const updatedLanes = boardData.lanes.map((lane) =>
      lane.id === laneId ? { ...lane, cards: [...lane.cards, newCard] } : lane
    );
    setBoardData({ lanes: updatedLanes });
  };

  return (
    <Box p={useBreakpointValue({ base: 2, md: 4 })} borderWidth={1} borderRadius="lg">
      <TrelloBoard data={boardData} draggable />
      <VStack spacing={4} align="start" mt={4}>
        <Input
          placeholder="Card Title"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddCard("lane1", e.target.value);
              e.target.value = "";
            }
          }}
          size={useBreakpointValue({ base: "sm", md: "md" })}
        />
        <Button
          colorScheme="blue"
          onClick={() => handleAddCard("lane1", "New Card")}
          size={useBreakpointValue({ base: "sm", md: "md" })}
        >
          Add Card to To Do
        </Button>
      </VStack>
    </Box>
  );
};

export default TrelloIntegration;
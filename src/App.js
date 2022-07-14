import { VStack } from "@chakra-ui/layout";
import React, { useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [xPlaying, setXPlaying] = useState(true);

  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying ? "X" : "O";
      } else {
        return value;
      }
    });
    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
  };

  return (
    <VStack p={5}>
      <Nav />
      <Header />
      <Board board={board} onClick={handleBoxClick} />
    </VStack>
  );
}

export default App;

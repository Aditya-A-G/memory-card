import React, { useState } from "react";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Cards from "./components/Cards";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [usedCards, setUsedCards] = useState([]);

  const handleCardClick = (id) => {
    if (usedCards.includes(id)) {
      setCurrentScore(0);
      setUsedCards([]);
    } else {
      setCurrentScore(currentScore + 1);
      if (currentScore >= bestScore) {
        setBestScore(currentScore + 1);
      }
      setUsedCards([...usedCards, id]);
    }
  };
  return (
    <div>
      <Header />
      <Stats currentScore={currentScore} bestScore={bestScore} />
      <Cards handleCardClick={handleCardClick} />
    </div>
  );
}

export default App;

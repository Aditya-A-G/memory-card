import React, { useState } from "react";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Cards from "./components/Cards";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div>
      <Header />
      <Stats />
      <Cards />
    </div>
  );
}

export default App;

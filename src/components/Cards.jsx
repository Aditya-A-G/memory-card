import React from "react";
import Card from "./Card";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";
import img9 from "../assets/9.png";
import img10 from "../assets/10.png";
import img11 from "../assets/11.png";
import img12 from "../assets/12.png";

import styles from "../styles/Cards.module.css";

function Cards(props) {
  const data = [
    {
      imageSrc: img1,
      name: "Bulbasaur",
      id: 1,
    },
    {
      imageSrc: img2,
      name: "Ivysaur",
      id: 2,
    },
    {
      imageSrc: img3,
      name: "Venusaur",
      id: 3,
    },
    {
      imageSrc: img4,
      name: "Charmander",
      id: 4,
    },
    {
      imageSrc: img5,
      name: "Charmeleon",
      id: 5,
    },
    {
      imageSrc: img6,
      name: "Charizard",
      id: 6,
    },
    {
      imageSrc: img7,
      name: "Squirtle",
      id: 7,
    },
    {
      imageSrc: img8,
      name: "Wartortle",
      id: 8,
    },
    {
      imageSrc: img9,
      name: "Blastoise",
      id: 9,
    },
    {
      imageSrc: img10,
      name: "Caterpie",
      id: 10,
    },
    {
      imageSrc: img11,
      name: "Metapod",
      id: 11,
    },
    {
      imageSrc: img12,
      name: "Butterfree",
      id: 12,
    },
  ];

  let previousRandomNumbers = [];
  let randomNumber = null;

  function generateRandomNumber() {
    randomNumber = Math.floor(Math.random() * data.length);

    for (let i = 0; i < previousRandomNumbers.length; i++) {
      if (randomNumber === previousRandomNumbers[i]) {
        randomNumber = generateRandomNumber();
        break;
      }
    }

    previousRandomNumbers.push(randomNumber);
    return randomNumber;
  }

  return (
    <div className={styles.cardsContainer}>
      {data.map((item) => {
        let randomNumber = generateRandomNumber();
        return (
          <Card
            key={data[randomNumber].id}
            id={data[randomNumber].id}
            imageSrc={data[randomNumber].imageSrc}
            name={data[randomNumber].name}
            handleCardClick={props.handleCardClick}
          />
        );
      })}
    </div>
  );
}

export default Cards;

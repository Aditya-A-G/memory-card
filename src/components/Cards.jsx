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

function Cards() {
  const data = [
    {
      imageSrc: img1,
      name: "Bulbasaur",
    },
    {
      imageSrc: img2,
      name: "Ivysaur",
    },
    {
      imageSrc: img3,
      name: "Venusaur",
    },
    {
      imageSrc: img4,
      name: "Charmander",
    },
    {
      imageSrc: img5,
      name: "Charmeleon",
    },
    {
      imageSrc: img6,
      name: "Charizard",
    },
    {
      imageSrc: img7,
      name: "Squirtle",
    },
    {
      imageSrc: img8,
      name: "Wartortle",
    },
    {
      imageSrc: img9,
      name: "Blastoise",
    },
    {
      imageSrc: img10,
      name: "Caterpie",
    },
    {
      imageSrc: img11,
      name: "Metapod",
    },
    {
      imageSrc: img12,
      name: "Butterfree",
    },
  ];

  return (
    <div className={styles.cardsContainer}>
      {data.map((item, index) => (
        <Card key={index} imageSrc={item.imageSrc} name={item.name} />
      ))}
    </div>
  );
}

export default Cards;

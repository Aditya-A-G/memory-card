import React from "react";
import styles from "../styles/Card.module.css";

function Card(props) {
  return (
    <div
      className={styles.card}
      onClick={(e) => {
        props.handleCardClick(props.id);
      }}
    >
      <img src={props.imageSrc} alt="pokemon" />
      <div className={styles.nameContainer}>
        <p>{props.name}</p>
      </div>
    </div>
  );
}

export default Card;

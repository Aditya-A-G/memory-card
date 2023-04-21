import React from "react";
import { Button } from "@mui/material";
import styles from "../styles/Stats.module.css";

function Stats(props) {
  console.log(styles);
  return (
    <div className={styles.statsContainer}>
      <Button
        variant="outlined"
        size="large"
        color="secondary"
        className={styles.stats}
      >
        Current score {props.currentScore}
      </Button>

      <Button variant="outlined" size="large" className={styles.stats}>
        Best score {props.highestScore}
      </Button>
    </div>
  );
}

export default Stats;

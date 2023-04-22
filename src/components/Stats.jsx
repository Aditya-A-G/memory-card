import React from "react";
import { Button } from "@mui/material";
import styles from "../styles/Stats.module.css";

function Stats(props) {
  return (
    <div className={styles.statsContainer}>
      <Button
        variant="outlined"
        size="large"
        style={{fontSize: "1.6rem"}}
      >
        Current score:{" "} {props.currentScore}
      </Button>

      <Button variant="outlined" size="large" style={{fontSize: "1.6rem"}}>
        Best score:{" "} {props.highestScore}
      </Button>
    </div>
  );
}

export default Stats;

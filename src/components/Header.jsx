import React from "react";
import { Typography } from "@mui/material";
import styles from "../styles/Header.module.css";
function Header() {
  return (
    <div>
      <Typography variant="h2" className={styles.headerContainer}>
        Pokemon Memory
      </Typography>
    </div>
  );
}

export default Header;

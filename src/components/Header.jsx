import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import bg from "../images/pattern-bg.png";

import Search from "./Search";
import Result from "./Result";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 300,
    paddingTop: 30,
    backgroundImage: `url('${bg}')`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },
  container: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  h1: {
    color: "white",
    fontWeight: 500,
    textAlign: "center",
    marginBottom: 26,
  },
  search: {
    marginBottom: 24,
  },
}));

export default function Header({ className }) {
  const styles = useStyles();
  return (
    <header className={clsx(styles.root, className)}>
      <Container className={styles.container}>
        <Typography className={styles.h1} variant="h1">
          IP Address Tracker
        </Typography>
        <Search className={styles.search} />
        <Result />
      </Container>
    </header>
  );
}

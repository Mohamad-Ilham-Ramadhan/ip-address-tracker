import React from "react";
import { makeStyles } from "@material-ui/core";

import Header from "./Header";
import Map from "./Map";

const useStyles = makeStyles((theme) => ({
  Header: {},
  Map: {},
}));

export default function App() {
  const styles = useStyles();

  return (
    <>
      <Header className={styles.Header} />
      <Map className={styles.Map} />
    </>
  );
}

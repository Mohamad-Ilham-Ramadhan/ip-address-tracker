import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputBase from "@material-ui/core/InputBase";
import ButtonBase from "@material-ui/core/ButtonBase";
import ArrowIcon from "../icons/Arrow";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    borderRadius: 16,
    overflow: "hidden",
  },
  input: {
    backgroundColor: "white",
    width: "100%",
    "& input": {
      fontSize: 18,
      padding: {
        top: 18,
        bottom: 18,
        left: 24,
        right: 0,
      },
    },
  },
  button: {
    background: theme.palette.neutral.veryDarkGray,
    width: 72,
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    "& path": {
      transform: "translate(5px, 5px)",
    },
  },
}));

export default function Search({ className }) {
  const styles = useStyles();
  return (
    <FormControl className={clsx(styles.root, className)}>
      <InputBase className={styles.input} />
      <ButtonBase className={styles.button}>
        <ArrowIcon />
      </ButtonBase>
    </FormControl>
  );
}
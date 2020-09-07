import React from "react";
import { makeStyles, lighten } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    borderRadius: 16,
    position: "relative",
    zIndex: 100,
    padding: [24, 0],

    "& h2": {
      fontWeight: 700,
      textTransform: "uppercase",
      fontSize: ".625rem",
      color: theme.palette.neutral.darkGray,
      letterSpacing: 2,
    },
    "& p": {
      fontWeight: 500,
      fontSize: "1.25rem",
    },
    [theme.breakpoints.up("md")]: {
      padding: 32,
      textAlign: "left",

      "& h2": {
        fontSize: ".775rem",
        marginBottom: 8,
      },
      "& p": {
        fontSize: "1.7rem",
      },
    },
  },
  gridItem: {
    position: "relative",
    marginBottom: 20,
    "&:last-child": {
      marginBottom: 0,
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: 32,
      paddingRight: 24,
      marginBottom: 0,
    },
    "&:first-child": {
      wordBreak: "break-all",
      [theme.breakpoints.up("md")]: {
        paddingLeft: 0,
      },
    },
  },
  divider: {
    display: "none",
    backgroundColor: lighten(theme.palette.neutral.darkGray, 0.5),
    [theme.breakpoints.up("md")]: {
      display: "block",
      width: 1,
      height: "75%",
      position: "absolute",
      right: 0,
      top: "50%",
      transform: "translateY(-50%)",
    },
  },
}));

export default function Result() {
  const styles = useStyles();
  return (
    <Paper className={styles.root} elevation={0}>
      <Grid container>
        <Grid className={styles.gridItem} item xs={12} md={3}>
          <Typography variant="subtitle1" component="h2">
            ip address
          </Typography>
          <Typography>192.212.174.101</Typography>
          <Divider className={styles.divider} />
        </Grid>
        <Grid className={styles.gridItem} item xs={12} md={3}>
          <Typography variant="subtitle1" component="h2">
            location
          </Typography>
          <Typography>Brooklyn, NY 10001</Typography>
          <Divider className={styles.divider} />
        </Grid>
        <Grid className={styles.gridItem} item xs={12} md={3}>
          <Typography variant="subtitle1" component="h2">
            timezone
          </Typography>
          <Typography>Eastern Daylight Time</Typography>
          <Divider className={styles.divider} />
        </Grid>
        <Grid className={styles.gridItem} item xs={12} md={3}>
          <Typography variant="subtitle1" component="h2">
            isp
          </Typography>
          <Typography>SpaceX Starlink</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

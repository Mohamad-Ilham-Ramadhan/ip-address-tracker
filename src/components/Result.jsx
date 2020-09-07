import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    borderRadius: 16,
    position: "relative",
    zIndex: 100,
    padding: [24, 0],
    "& .MuiGrid-item": {
      marginBottom: 20,
      "&:last-child": {
        marginBottom: 0,
      },
    },
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
  },
}));

export default function Result() {
  const styles = useStyles();
  return (
    <Paper className={styles.root} elevation={0}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="subtitle1" component="h2">
            ip address
          </Typography>
          <Typography>192.212.174.101</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" component="h2">
            location
          </Typography>
          <Typography>Brooklyn, NY 10001</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" component="h2">
            timezone
          </Typography>
          <Typography>Eastern Daylight Time</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" component="h2">
            isp
          </Typography>
          <Typography>SpaceX Starlink</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

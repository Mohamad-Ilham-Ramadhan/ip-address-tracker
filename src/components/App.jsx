import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

import Header from "./Header";
import Map from "./Map";

const useStyles = makeStyles((theme) => ({
  Header: {},
  Map: {},
  alert: {
    "& .MuiDialog-paper": {
      backgroundColor: theme.palette.error.main,
      color: "white",
    },
  },
}));

export default function App() {
  const styles = useStyles();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("");
  const [location, setLocation] = useState([0, 0]);
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [zip, setZip] = useState("");
  const [timezone, setTimezone] = useState("");
  const [isp, setIsp] = useState("");
  function getIPAddress(ipOrDomain = "") {
    setLoading(true);
    let domain = ipOrDomain
      .split("/")
      .filter((str) => str.includes("."))
      .join();
    domain = domain == "" ? ipOrDomain : domain;
    axios
      // .get(`http://ip-api.com/json/${domain}`) // Kalo pake localhost soalnya masih http
      .get(`https://ipapi.co/${domain}/json/`)
      .then((response) => {
        const result = response.data;
        // if (result.status == "success") { // ip-api
        if (!result.error) {
          // setLocation([result.lat, result.lon]); // ip-api
          setLocation([result.latitude, result.longitude]);
          // setQuery(result.query); // ip-api
          setQuery(result.ip);
          // setValue(result.query; // ip-api
          setValue(result.ip);
          setRegion(result.region);
          setCity(result.city);
          // setZip(result.zip); // ip-api
          setZip(result.postal == null ? "" : result.postal);
          setTimezone(result.timezone);
          // setIsp(result.isp); // ip-api
          setIsp(result.org);
          setLoading(false);
        } else {
          setAlert(true);
          setAlertMessage(`${result.message} (IP/domain)`);
          setLoading(false);
        }
      })
      .catch((response) => {
        setAlert(true);
        setAlertMessage(response.message);
        setLoading(false);
      });
  }
  useEffect(() => {
    getIPAddress();
  }, []);
  function onValueChange(e) {
    setValue(e.target.value);
  }
  function onSearchSubmit() {
    getIPAddress(value);
  }
  function handleClose() {
    setAlert(false);
  }
  return (
    <>
      {alert && (
        <Dialog className={styles.alert} open={alert} onClose={handleClose}>
          <DialogTitle>{alertMessage}</DialogTitle>
        </Dialog>
      )}
      <Header
        className={styles.Header}
        query={query}
        value={value}
        region={region}
        city={city}
        zip={zip}
        timezone={timezone}
        isp={isp}
        loading={loading}
        onValueChange={onValueChange}
        onSearchSubmit={onSearchSubmit}
      />
      <Map className={styles.Map} location={location} />
    </>
  );
}

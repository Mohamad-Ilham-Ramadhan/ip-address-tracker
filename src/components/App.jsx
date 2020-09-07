import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

import Header from "./Header";
import Map from "./Map";

const useStyles = makeStyles((theme) => ({
  Header: {},
  Map: {},
}));

export default function App() {
  const styles = useStyles();
  const [loading, setLoading] = useState(false);
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
    axios
      .get(`http://ip-api.com/json/${domain}`)
      .then((response) => {
        const result = response.data;
        setLocation([result.lat, result.lon]);
        setQuery(result.query);
        setValue(result.query);
        setRegion(result.region);
        setCity(result.city);
        setZip(result.zip);
        setTimezone(result.timezone);
        setIsp(result.isp);
        setLoading(false);
      })
      .catch((response) => {
        console.log(response);
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
  return (
    <>
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

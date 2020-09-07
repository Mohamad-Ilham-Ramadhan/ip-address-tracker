import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core";

import Header from "./Header";
import Map from "./Map";

const useStyles = makeStyles((theme) => ({
  Header: {},
  Map: {},
}));

export default function App() {
  const styles = useStyles();
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("");
  const [location, setLocation] = useState([0, 0]);
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [zip, setZip] = useState("");
  const [timezone, setTimezone] = useState("");
  const [isp, setIsp] = useState("");

  useEffect(() => {
    axios.get("http://ip-api.com/json/").then((response) => {
      const result = response.data;
      setLocation([result.lat, result.lon]);
      setQuery(result.query);
      setValue(result.query);
      setRegion(result.region);
      setCity(result.city);
      setZip(result.zip);
      setTimezone(result.timezone);
      setIsp(result.isp);
    });
  }, []);
  function onValueChange(e) {
    setValue(e.target.value);
  }
  function onSearchSubmit() {
    let domain = value
      .split("/")
      .filter((str) => str.includes("."))
      .join();
    // setLoading(true);
    axios.get(`http://ip-api.com/json/${domain}`).then((response) => {
      const result = response.data;
      setLocation([result.lat, result.lon]);
      setQuery(result.query);
      setRegion(result.region);
      setCity(result.city);
      setZip(result.zip);
      setTimezone(result.timezone);
      setIsp(result.isp);
      setValue(domain);
      // setLoading(false);
    });
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
        onValueChange={onValueChange}
        onSearchSubmit={onSearchSubmit}
      />
      <Map className={styles.Map} location={location} />
    </>
  );
}

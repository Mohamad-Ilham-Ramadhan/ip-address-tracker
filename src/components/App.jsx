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
      setRegion(result.region);
      setCity(result.city);
      setZip(result.zip);
      setTimezone(result.timezone);
      setIsp(result.isp);
    });
  }, []);

  return (
    <>
      <Header
        className={styles.Header}
        query={query}
        region={region}
        city={city}
        zip={zip}
        timezone={timezone}
        isp={isp}
      />
      <Map className={styles.Map} location={location} />
    </>
  );
}

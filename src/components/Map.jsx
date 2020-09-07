import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import L from "leaflet";
import { Map, TileLayer, Marker } from "react-leaflet";

import locationIcon from "../images/icon-location.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 535,
    zIndex: 50,
  },
}));

// const mymap = L.map("mapid").setView([51.505, -0.09], 13);

// L.tileLayer(
//   "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
//   {
//     attribution:
//       'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: "mapbox/streets-v11",
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken:
//       "pk.eyJ1IjoibS1pbGhhbS1yIiwiYSI6ImNrZW51MWZxNjB4ZTMzMHFtYXU3M3FqcHEifQ.vgRnsJtC77UBeKVimay9QA",
//   }
// ).addTo(mymap);
const markerIcon = L.icon({
  iconUrl: locationIcon,
  iconSize: [46, 56],
});
// var marker = L.marker([-6.123755, 106.125829], {
//   icon: markerIcon,
// }).addTo(mymap);

export default function Mapsdf({ className, location }) {
  const styles = useStyles();
  return (
    <Map
      className={styles.root}
      center={location}
      zoom={13}
      zoomControl={false}
    >
      <TileLayer
        url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
        maxZoom={18}
        id="mapbox/streets-v11"
        tileSize={512}
        zoomOffset={-1}
        accessToken="pk.eyJ1IjoibS1pbGhhbS1yIiwiYSI6ImNrZW51MWZxNjB4ZTMzMHFtYXU3M3FqcHEifQ.vgRnsJtC77UBeKVimay9QA"
      />
      <Marker icon={markerIcon} position={location}></Marker>
    </Map>
  );
}

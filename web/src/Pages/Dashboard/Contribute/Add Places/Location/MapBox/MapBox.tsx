import { useEffect } from "react";
import "./MapBox.css";

// importing mapbox functions and components
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

mapboxgl.accessToken =
  "pk.eyJ1IjoieWFtYW4xMzM3IiwiYSI6ImNrd3V4cWRrejFjcnIydXFxcHNjcG9hbHMifQ.0MvUydr2xdlAEM2eVWqEkw";

const MapBox = ({ state }: any) => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
      enableHighAccuracy: true,
    });

    function successLocation(position: any) {
      setupMap([position.coords.longitude, position.coords.latitude]);
    }

    function errorLocation() {
      setupMap([85.3311488, 27.6955136]);
    }

    async function setupMap(center) {
      const map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v11",
        center: center,
        zoom: 14,
      });

      map.on("click", function (e: any) {
        const coordinates = e.lngLat;
        updateMarker(coordinates);
        state.setCoordinates([coordinates.lat, coordinates.lng])
        console.log(coordinates)
      });

      // Set marker options.
      const markerOptions = {
        color: "red",
        draggable: true,
      };

      const nav = new mapboxgl.NavigationControl();
      map.addControl(nav);

      // Add search functionality
      let geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      });

      map.addControl(geocoder, 'top-left');

      const marker = new mapboxgl.Marker(markerOptions)
        .setLngLat(center)
        .addTo(map);

      function updateMarker(coordinates: any) {
        marker.setLngLat(coordinates);
      }
    }
  }, [state]);

  return (
    <>
      <div id="map" style={{ height: "43vh", width: "100%" }} />
    </>
  );
};

export default MapBox;

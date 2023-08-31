import {
  LoadScript,
  MarkerF,
  GoogleMap,
  DirectionsRenderer,
  Marker,
} from "@react-google-maps/api";
import { useEffect, useState } from "react";
import warehouse from "../../assets/images/Group 6.svg";

import originMarker from "../../assets/images/origin_new.svg";

const containerStyle = {
  width: "100%",
  height: "370px",
  borderRadius: "10px",
};

const customMapStyle = [
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#343434" }],
  },
  {
    featureType: "all",
    elementType: "geometry.fill",
    stylers: [{ color: "#000000" }],
  },
  {
    elementType: "labels.text",
    stylers: [{ color: "#28282B" }, { weight: 1 }, { fontSize: "10px" }],
  },
  {
    featureType: "poi",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi.business",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi.airport",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
];

export default function GoogleMapComponent(props) {
  const [directions, setDirections] = useState(null);
  const [center, setCenter] = useState({});
  const [latitude, setlatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  let digitArray;
  useEffect(() => {
    if (props) {
      digitArray = props?.location?.split("&");
      let lat = digitArray[0];
      let long = digitArray[1];
      setlatitude(Number(lat));
      setLongitude(Number(long));
    }
  }, [digitArray]);

  const origin = { lat: latitude, lng: longitude };
  const destination = null;

  useEffect(() => {
    if (latitude) {
      setCenter({ lat: latitude, lng: longitude });
    }
  }, [latitude, longitude]);

  const customMarkerIcon = {
    url: originMarker,
    scaledSize: { width: 22, height: 22 },
  };
  const icon = { url: warehouse, scaledSize: { width: 80, height: 125 } };

  const fetchDirections = async () => {
    if (window.google && destination) {
      const directionsService = new window.google.maps.DirectionsService();
      try {
        const response = await new Promise((resolve, reject) => {
          directionsService.route(
            {
              origin: origin,
              destination: destination,
              travelMode: window.google.maps.TravelMode.DRIVING,
            },
            (response, status) => {
              if (status === "OK") {
                resolve(response);
              } else {
                reject(status);
              }
            }
          );
        });

        setDirections(response);
      } catch (error) {
        console.error("Error fetching directions:", error);
      }
    }
  };

  useEffect(() => {
    // Check if window.google is defined before running fetchDirections
    if (!window.google) {
      const checkGoogleInterval = setInterval(() => {
        if (window.google) {
          clearInterval(checkGoogleInterval);
          fetchDirections();
        }
      }, 100); // Check every 100ms
      return () => clearInterval(checkGoogleInterval);
    } else {
      fetchDirections();
    }
  }, []); // Empty dependency array ensures this runs once

  return (
    <LoadScript googleMapsApiKey="AIzaSyBGMUJe2XUHhIZKXIrq4btVXK2s3zeqLLM">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        options={{
          styles: customMapStyle,
          disableDefaultUI: true,
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
          // mapTypeId:"satellite" /
        }}
      >
        <MarkerF position={origin} icon={icon} />
        {directions && (
          <DirectionsRenderer
            directions={directions}
            options={{
              polylineOptions: {
                strokeOpacity: 1,
                strokeColor: "#FFFDD0",
              },
              suppressMarkers: true,
            }}
          ></DirectionsRenderer>
        )}
        <Marker position={origin} icon={customMarkerIcon} />
        {/* <Marker position={destination} icon={customMarkerIcon} /> */}
      </GoogleMap>
    </LoadScript>
  );
}

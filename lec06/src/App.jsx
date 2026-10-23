import ReactDOM from "react-dom/client";
import Content from "./components/Content";
import AppLayout from "./layout/AppLayout";

// css
import { useEffect, useState } from "react";
import { reverseGeocode } from "./api/location";
import "./css/Content.styles.css";
import "./css/global.css";
import "./css/Header.styles.css";

// Low Level Design
// Header
// Logo
// Location
// Nav Links
// Sign in/out button

// Content
// whats on your mind - carousel
// top restaurants - carousel
// Restaurants with online food delivery
// Search Bar
// Filter Sort

// Cards Grid
// Card
// Name, rating, time, cusines, location

// Footer

const DEFAULT_LOCATION = {
  latitude: 21.1741515,
  longitude: 79.09486629999999,
  label: "Nagpur, Maharashtra",
};

function App() {
  const [location, setLocation] = useState(DEFAULT_LOCATION);
  const [locationStatus, setLocationStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    if (!("geolocation" in navigator)) {
      setLocationStatus("error");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const place = await reverseGeocode(latitude, longitude);
        if (cancelled) return;
        setLocation({
          latitude,
          longitude,
          label: place?.label ?? "Current location",
        });
        setLocationStatus("ready");
      },
      (error) => {
        if (cancelled) return;
        console.error("Geolocation error:", error);
        setLocationStatus(
          error.code === error.PERMISSION_DENIED ? "denied" : "error",
        );
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 5 * 60 * 1000 },
    );

    return () => {
      cancelled = true;
    };
  }, []);

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
    setLocationStatus("ready");
  };

  return (
    <AppLayout
      location={location}
      locationStatus={locationStatus}
      onLocationChange={handleLocationChange}
    >
      <Content location={location} />
    </AppLayout>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

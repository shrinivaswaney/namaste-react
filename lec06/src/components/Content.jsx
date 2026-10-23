import TopRestaurantChains from "./sections/TopRestaurantChains";
import WhatsOnYourMind from "./sections/WhatsOnYourMind";

const Content = ({ location }) => {
  const lat = location?.latitude;
  const lng = location?.longitude;
  return (
    <div className="container">
      <WhatsOnYourMind latitude={lat} longitude={lng} />
      <TopRestaurantChains latitude={lat} longitude={lng} />
    </div>
  );
};

export default Content;

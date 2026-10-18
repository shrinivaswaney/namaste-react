import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import Card from "./Card";

const SearchBar = () => {
  return (
    <div className="search">
      <div className="search-icon">
        <MagnifyingGlassIcon
          width={20}
          height={20}
          style={{ backgroundColor: "white", marginRight: "2px" }}
        />
      </div>
      <input type="search" placeholder="Search..." />
    </div>
  );
};

const MainContent = () => {
  return (
    <section>
      <SearchBar />
      <div className="scroll-container">
        <Card
          name="Pohewala"
          image="https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/11/26/ebd9fa0b-a259-4dd8-b7ad-90493e015f86_image18b0b3616150a4f2a9b932d27ccf72dc5.JPG"
          rating={4.3}
          cuisines={["Maharashtrian", "North Indian"]}
          costForTwo="100"
          locality="Ayodhya Nagar, Nagpur"
          distanceKm={5.9}
          banner={[
            "Flat 10% off on pre-booking",
            "Up to 10% off with bank offers",
            "Get extra ₹125 off using PAYTMNEW",
          ]}
          onClick={() => navigate(`/restaurant/${id}`)}
        />
        <Card
          name="Yummi Momos"
          image={
            "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1678099208/918b0e74de5110fbad7304c172490374.webp"
          }
          rating={5}
          cuisines={["Chinese", "Fast Food"]}
          costForTwo="300"
          locality="NIT Square, Pachpaoli, Nagpur"
          distanceKm={4.7}
          banner={[
            "Flat 10% off on walk-in",
            "Up to 10% off with bank offers",
            "Get extra ₹125 off using PAYTMNEW",
          ]}
          onClick={() => navigate(`/restaurant/${id}`)}
        />
        <Card
          name="Yummi Momos"
          image={
            "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1678099208/918b0e74de5110fbad7304c172490374.webp"
          }
          rating={5}
          cuisines={["Chinese", "Fast Food"]}
          costForTwo="300"
          locality="NIT Square, Pachpaoli, Nagpur"
          distanceKm={4.7}
          banner={[
            "Flat 10% off on walk-in",
            "Up to 10% off with bank offers",
            "Get extra ₹125 off using PAYTMNEW",
          ]}
          onClick={() => navigate(`/restaurant/${id}`)}
        />
        <Card
          name="Yummi Momos"
          image={
            "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1678099208/918b0e74de5110fbad7304c172490374.webp"
          }
          rating={5}
          cuisines={["Chinese", "Fast Food"]}
          costForTwo="300"
          locality="NIT Square, Pachpaoli, Nagpur"
          distanceKm={4.7}
          banner={[
            "Flat 10% off on walk-in",
            "Up to 10% off with bank offers",
            "Get extra ₹125 off using PAYTMNEW",
          ]}
          onClick={() => navigate(`/restaurant/${id}`)}
        />
      </div>
    </section>
  );
};

export default MainContent;

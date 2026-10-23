import Footer from "./Footer";
import Header from "./Header";

const AppLayout = ({
  location,
  locationStatus,
  onLocationChange,
  children,
}) => {
  return (
    <>
      <Header
        location={location}
        locationStatus={locationStatus}
        onLocationChange={onLocationChange}
      />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;

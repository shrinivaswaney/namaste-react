import { useEffect } from "react";
import { fetchData } from "../api/swiggy";

const Content = ({ location }) => {
  useEffect(() => {
    fetchData(location.latitude, location.longitude);
  }, []);

  return <div className="container">Content</div>;
};

export default Content;

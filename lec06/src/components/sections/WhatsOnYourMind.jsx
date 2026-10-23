import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { fetchFoodTypes, IMG_CDN } from "../../api/swiggy";

const WhatsOnYourMind = ({ latitude, longitude }) => {
  const [header, setHeader] = useState("");
  const [id, setId] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!latitude || !longitude) return;

    let ignore = false;

    const getSwiggyData = async () => {
      setLoading(true);
      try {
        const { header, items, id } = await fetchFoodTypes(latitude, longitude);
        if (!ignore) {
          setId(id);
          setHeader(header);
          setItems(items);
          setError(null);
        }
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    getSwiggyData();
    return () => {
      ignore = true;
    };
  }, [latitude, longitude]);

  const handleScroll = (direction) => {
    const container = document.querySelector(`#${id} .scroll-container`);
    if (container) {
      const scrollOffset = 350;
      container.scrollBy({
        left: direction === "left" ? -scrollOffset : scrollOffset,
        behavior: "smooth",
      });
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong: {error}</p>;

  return (
    <section id={id} className="section-1">
      <div className="header">
        <h2>{header}</h2>
        <div>
          <ArrowLeftIcon
            size={15}
            weight="bold"
            className="arrow"
            onClick={() => handleScroll("left")}
          />
          <ArrowRightIcon
            size={15}
            weight="bold"
            className="arrow"
            onClick={() => handleScroll("right")}
          />
        </div>
      </div>
      <div className="scroll-container">
        {items.map((item) => (
          <a key={item.id} href={item.action.link}>
            <img
              src={IMG_CDN + item.imageId}
              alt={item.accessibility?.altText}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default WhatsOnYourMind;

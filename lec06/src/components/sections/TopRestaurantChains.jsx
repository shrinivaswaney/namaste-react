import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { fetchTopRestaurants, IMG_CDN } from "../../api/swiggy";

const TopRestaurantChains = ({ latitude, longitude }) => {
  const [header, setHeader] = useState("");
  const [id, setId] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [thumb, setThumb] = useState({ left: 0, width: 100 });

  useEffect(() => {
    if (!latitude || !longitude) return;

    let ignore = false;

    const getSwiggyData = async () => {
      setLoading(true);
      try {
        const { header, items, id } = await fetchTopRestaurants(
          latitude,
          longitude,
        );
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

  const updateTracker = (el) => {
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setThumb({
      left: (scrollLeft / scrollWidth) * 100,
      width: (clientWidth / scrollWidth) * 100,
    });
  };

  useEffect(() => {
    if (!id) return; // wait until the id has loaded

    const container = document.querySelector(`#${id} .scroll-container`);
    if (!container) return;

    updateTracker(container);
    const onResize = () => updateTracker(container);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [items, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong: {error}</p>;

  return (
    <section id={id} className="section-2">
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
      <div
        className="scroll-container"
        onScroll={(e) => updateTracker(e.currentTarget)}
      >
        {items.map((item) => (
          <a key={item.id} href={item.link} className="res-card">
            <div className="top">
              <img src={IMG_CDN + item.image_id} alt={item?.name} />
            </div>
            <div className="bottom">
              <h3>{item.name}</h3>
              <div className="row1">
                <span className="rating">
                  <StarIcon weight="fill" className="star" />
                  <p>{item.rating}</p>
                </span>
                <span className="sla">{item.sla}</span>
              </div>
              <div className="cuisines">{item.cuisines.join(", ")}</div>
              <div className="meta">
                <p>{item.area}</p>
                <p>{item.cost}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="progress-tracker">
        <span
          className="thumb"
          style={{ left: `${thumb.left}%`, width: `${thumb.width}%` }}
        />
      </div>
    </section>
  );
};

export default TopRestaurantChains;

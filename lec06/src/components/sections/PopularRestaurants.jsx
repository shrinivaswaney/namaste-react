import { StarIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { fetchPopularRestaurants, IMG_CDN } from "../../api/swiggy";
import { SkeletonRestaurantCard } from "../skeletons/SkeletonCard";

const PopularRestaurants = ({ latitude, longitude }) => {
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
        const { header, items, id } = await fetchPopularRestaurants(
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

  if (loading) {
    return (
      <section className="section-3" aria-busy="true">
        <div className="header">
          <span className="sk-title shimmer-block" />
        </div>
        <div className="res-grid">
          {Array.from({ length: 8 }, (_, i) => (
            <SkeletonRestaurantCard key={i} />
          ))}
        </div>
      </section>
    );
  }

  if (error) return <p>Something went wrong: {error}</p>;

  return (
    <section id={id} className="section-3">
      <h2>{header}</h2>
      <div className="filter-group"></div>
      <div className="res-grid">
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
    </section>
  );
};

export default PopularRestaurants;

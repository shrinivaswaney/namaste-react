import { StarIcon } from "@phosphor-icons/react";
import { CDN_URL } from "../utils/constant";

function imageContainer(image_id, name, rating) {
  return (
    <div className="image">
      <img src={CDN_URL + image_id} alt={name} />
      <h3>{name}</h3>
      <div className="rating">
        <span>
          <StarIcon size={10} color="white" weight="fill" />
        </span>
        <p>{rating}</p>
      </div>
    </div>
  );
}

// destructuring on the fly props => cuisines, costForTwo, locality, distanceKm, banner
function detailsContainer(cuisines, costForTwo, locality, distanceKm, banner) {
  return (
    <div>
      <div className="row">
        <span className="cuisines">{cuisines.join(" • ")}</span>
        <span className="cost">
          <b>₹{costForTwo}</b>
          <span>for two</span>
        </span>
      </div>
      <div className="row">
        <span className="locality">{locality}</span>
        <span className="distance">
          <b>{distanceKm}</b> km
        </span>
      </div>

      <div className="banner-container">
        {banner.slice(0, 2).map((item, idx) => (
          <div className="banner" key={idx}>
            {item}
          </div>
        ))}
        {banner.slice(2, 3).map((item, idx) => (
          <div className="banner-off" key={idx}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

const Card = ({ res }) => {
  const {
    name,
    image_id,
    rating,
    cuisines,
    costForTwo,
    locality,
    distanceKm,
    onClick,
    banner,
  } = res;

  return (
    <div className="card" onClick={onClick} role="button" tabIndex={0}>
      {imageContainer(image_id, name, rating)}
      {detailsContainer(cuisines, costForTwo, locality, distanceKm, banner)}
    </div>
  );
};

export default Card;

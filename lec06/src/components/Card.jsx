import { StarIcon } from "@phosphor-icons/react";
import { CDN_URL } from "../utils/constant";

function imageContainer(
  cloudinaryImageId,
  name,
  rating,
  slaString,
  totalRatingsString,
) {
  return (
    <div className="image">
      {cloudinaryImageId ? (
        <img src={CDN_URL + cloudinaryImageId} alt={name} />
      ) : null}
      <div className="image-top">
        {slaString ? (
          <div className="sla">
            <p>{slaString}</p>
          </div>
        ) : null}
        {totalRatingsString != null ? (
          <span className="totalR">
            <p>{totalRatingsString}</p> Ratings
          </span>
        ) : null}
      </div>
      {rating != null ? (
        <div className="rating">
          <span>
            <StarIcon size={10} color="white" weight="fill" />
          </span>
          <p>{rating}</p>
        </div>
      ) : null}
      <h3 className="restro-heading">{name}</h3>
    </div>
  );
}

// destructuring on the fly props => cuisines, costForTwo, locality, distanceKm
function detailsContainer(cuisines, costForTwo, locality, distanceKm) {
  return (
    <div className="info">
      <div className="row">
        <span className="cuisines">{cuisines.join(" • ")}</span>
      </div>
      <div className="row">
        <span className="locality">{locality}</span>
        {costForTwo ? (
          <span className="cost">
            <b>₹{costForTwo}</b>
            <span>for two</span>
          </span>
        ) : null}
      </div>
      <div className="row">
        {distanceKm != null ? (
          <span className="distance">
            <b>{distanceKm}</b> km
          </span>
        ) : null}
      </div>
    </div>
  );
}

const Card = ({ res }) => {
  const {
    name = "",
    cloudinaryImageId,

    rating,
    totalRatingsString,
    slaString,

    cuisines = [],
    costForTwo,
    locality,
    distanceKm,
    onClick,
  } = res ?? {};

  return (
    <div className="card" onClick={onClick} role="button" tabIndex={0}>
      {imageContainer(
        cloudinaryImageId,
        name,
        rating,
        slaString,
        totalRatingsString,
      )}
      {detailsContainer(cuisines, costForTwo, locality, distanceKm)}
    </div>
  );
};

export default Card;

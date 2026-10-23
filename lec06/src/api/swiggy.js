const SWIGGY_URL = (latitude, longitude) =>
  `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

export const IMG_CDN =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export async function fetchFoodTypes(latitude, longitude) {
  const res = await fetch(SWIGGY_URL(latitude, longitude));
  if (!res.ok) throw new Error(`Swiggy request failed: ${res.status}`);

  const data = await res.json();

  const widget = data?.data?.cards?.find(
    (c) => c.card?.card?.id === "whats_on_your_mind",
  )?.card?.card;

  const id = widget?.id;
  const header = widget?.header?.title ?? "What's on your mind?";
  const items = widget?.imageGridCards?.info ?? [];

  return { header, items, id };
}

export async function fetchTopRestaurants(latitude, longitude) {
  const res = await fetch(SWIGGY_URL(latitude, longitude));
  if (!res.ok) throw new Error(`Swiggy request failed: ${res.status}`);

  const data = await res.json();

  const widget = data?.data?.cards?.find(
    (c) => c.card?.card?.id === "top_brands_for_you",
  )?.card?.card;

  const id = widget?.id;
  const header = widget?.header?.title ?? "Top restaurant chains in Nagpur";
  const items = widget?.gridElements?.infoWithStyle?.restaurants.map(
    (restaurant) => {
      return {
        id: restaurant.info.id,
        image_id: restaurant.info.cloudinaryImageId,
        name: restaurant.info.name,
        link: restaurant.cta.link,
        area: restaurant.info.areaName,
        cost: restaurant.info.costForTwo,
        cuisines: restaurant.info.cuisines,
        rating: restaurant.info.avgRating,
        sla: restaurant.info.sla.slaString,
      };
    },
  );

  return { header, items, id };
}

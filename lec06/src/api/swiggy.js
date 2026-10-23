const SWIGGY_URL = (latitude, longitude) =>
  `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

const SWIGGY_IMAGE_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export async function fetchData(latitude, longitude) {
  const response = await fetch(SWIGGY_URL(latitude, longitude));

  const data = await response.json();
  console.log(data);
}

function deriveLabel(address, fallbackDisplayName) {
  if (!address) return fallbackDisplayName;
  const city =
    address.city ||
    address.town ||
    address.village ||
    address.suburb ||
    address.county;
  return (
    [city, address.state, address.country].filter(Boolean).join(", ") ||
    fallbackDisplayName
  );
}

export async function getCoordinates(locationName) {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(locationName)}&format=json&limit=1&addressdetails=1`;

  try {
    const response = await fetch(url, { headers: { "User-Agent": "Fooder" } });
    if (!response.ok)
      throw new Error(`Nominatim request failed: ${response.status}`);

    const data = await response.json();
    if (!data || data.length === 0) throw new Error("Location not found");

    const result = data[0];
    const latitude = parseFloat(result.lat);
    const longitude = parseFloat(result.lon);
    if (Number.isNaN(latitude) || Number.isNaN(longitude))
      throw new Error("Invalid coordinates");

    return {
      latitude,
      longitude,
      label: deriveLabel(result.address, result.display_name),
    };
  } catch (error) {
    console.error("Geocoding error:", error);
    return null;
  }
}

export async function reverseGeocode(latitude, longitude) {
  const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

  try {
    const response = await fetch(url, { headers: { "User-Agent": "Fooder" } });

    if (!response.ok)
      throw new Error(`Nominatim request failed: ${response.status}`);

    const data = await response.json();

    if (!data?.address) throw new Error("No address in response");

    return { label: deriveLabel(data.address, data.display_name) };
  } catch (error) {
    console.error("Reverse geocoding error:", error);
    return null;
  }
}

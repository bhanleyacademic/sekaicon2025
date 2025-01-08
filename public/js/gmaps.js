// Initialize and add the map
let map;

async function initMap() {
  // The location of Cherry Valley
  const position = { lat: 40.052338243197234, lng:  -82.47682574232762 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Cherry Valley
  map = new Map(document.getElementById("map"), {
    zoom: 10,
    center: position,
    mapId: "SEKAICON",
  });

  // The marker, positioned at Cherry Valley
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Sekaicon",
  });
}

initMap();
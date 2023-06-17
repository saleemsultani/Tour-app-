/* eslind-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoic2FsZWVtOTNqIiwiYSI6ImNsaXIwdXVvazA2NjEzZW90c2Q3N3V5bmQifQ.oE_Zev07U9qD2AbP7SYorw';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/saleem93j/clisjdcgj00oj01qvf9i28ktr',
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // create marker marker
    const el = document.createElement('div');
    el.className = 'marker';

    //   Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};

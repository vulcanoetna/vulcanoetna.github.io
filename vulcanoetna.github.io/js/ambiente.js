mapboxgl.accessToken = 'pk.eyJ1IjoiZG9ubWFyaXVzIiwiYSI6ImNsZjNwM21ybjB1cG8zc2xqZG9razR3MGQifQ.8HfLMdxuoJ-2ca1PWFOa2A';

const map = new mapboxgl.Map({
    container: 'map',
    zoom: 9,
    center: [14.9934,37.7510],
    style:
      'mapbox://styles/mapbox/satellite-v9'
  });
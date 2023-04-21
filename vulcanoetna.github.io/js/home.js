//mappa home

mapboxgl.accessToken = 'pk.eyJ1IjoiZG9ubWFyaXVzIiwiYSI6ImNsZjNwM21ybjB1cG8zc2xqZG9razR3MGQifQ.8HfLMdxuoJ-2ca1PWFOa2A';

    var maphome = new mapboxgl.Map({
        container: 'map_home', // Mappa
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [15.035958 , 37.600043], // Longitudine e latitudine del centro della mappa 
        zoom: 9 // Zoom iniziale della mappa
    });

    // Primo segnaposto
    var marker1 = new mapboxgl.Marker()
        .setLngLat([15.0843608, 37.5128079]) // Longitudine e latitudine del segnaposto
        .addTo(maphome);
        

    // Secondo segnaposto
    var marker2 = new mapboxgl.Marker()
        .setLngLat([14.998385, 37.700537 ]) // Longitudine e latitudine del segnaposto
        .addTo(maphome);

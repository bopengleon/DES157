mapboxgl.accessToken = 'pk.eyJ1IjoicGVuZzA3MjkiLCJhIjoiY2l6enQ3NGluMDQ2bDJ3bmhmMGNmZXk4YyJ9.qCYFD8QwGIzB8v5UY5Ms1Q';
var map = new mapboxgl.Map({
    container: 'map',
    center: [120.147274, 30.247187],
    zoom:13,
    style: 'mapbox://styles/peng0729/cizzvudo2005t2sob8vjfg0d9'
});
map.addControl(new mapboxgl.NavigationControl());
map.on('load', function () {

    map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [120.147274, 30.247187]
                    },
                    "properties": {
                        "title": "WestLake",
                        "icon": "monument"
                    }
                }]
            }
        },
        "layout": {
            "icon-image": "{icon}-15",
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top"
        }
    var popup = new mapboxgl.Popup({closeOnClick: false})
    .setLngLat([-96, 37.8])
    .setHTML('<h1>Hello World!</h1>')
    .addTo(map);
    });
});
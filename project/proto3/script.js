mapboxgl.accessToken = 'pk.eyJ1IjoicGVuZzA3MjkiLCJhIjoiY2l6enQ3NGluMDQ2bDJ3bmhmMGNmZXk4YyJ9.qCYFD8QwGIzB8v5UY5Ms1Q';
var map = new mapboxgl.Map({
    container: 'map',
    center: [120.147274, 30.247187],
    zoom:13,
    style: 'mapbox://styles/peng0729/cizzvudo2005t2sob8vjfg0d9'
});
map.on('load', function () {

    // Add a layer showing the places.
    map.addLayer({
        "id": "places",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Three Pool mirroring the moon</strong><p><a href=\"http://www.mtpleasantdc.com/makeitmtpleasant\" target=\"_blank\" title=\"Opens in a new window\">link</a> add to list button </p>",
                        "icon": "star"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates":  [120.1453, 30.2388]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Truckeroo</strong>",
                        "icon": "star"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [120.147274, 30.247187]
                    }
                }]
            }
        },
        "layout": {
            "icon-image": "{icon}-15",
            "icon-allow-overlap": true
        }
    });
});


// When a click event occurs near a place, open a popup at the location of
// the feature, with description HTML from its properties.
map.on('click', function (e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['places'] });

    if (!features.length) {
        return;
    }

    var feature = features[0];

    // Populate the popup and set its coordinates
    // based on the feature found.
    var popup = new mapboxgl.Popup()
        .setLngLat(feature.geometry.coordinates)
        .setHTML(feature.properties.description)
        .addTo(map);
});

// Use the same approach as above to indicate that the symbols are clickable
// by changing the cursor style to 'pointer'.
map.on('mousemove', function (e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['places'] });
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
});
map.addControl(new mapboxgl.NavigationControl());


// map.on('load', function () {

//     map.addLayer({
//         "id": "points",
//         "type": "symbol",
//         "source": {
//             "type": "geojson",
//             "data": {
//                 "type": "FeatureCollection",
//                 "features": [{
//                     "type": "Feature",
//                     "geometry": {
//                         "type": "Point",
//                         "coordinates": [120.147274, 30.247187]
//                     },
//                     "properties": {
//                         "description": "WestLake",
//                         "icon": "star"
//                     }
//                 }]
//             }
//         },
//         "layout": {
//             "icon-image": "{icon}-15",
//             "icon-allow-overlap": true
//         }
// });

// ===================  Planner drag =====================
dragula([document.getElementById('placelist'), document.getElementById('planlist')], {revertOnSpill: true})
      .on('drag', function (el) {
        el.className = el.className.replace(' moved', '');
      }).on('drop', function (el) {
        el.className += ' moved';
      }).on('over', function (el, lists) {
        lists.className += ' over';
      }).on('out', function (el, lists) {
        lists.className = lists.className.replace(' over', '');
      });


function myFunction() {
    var n = 2;
    var lists = document.createElement("div");
    lists.className = "lists";
    lists.style.marginTop = "100px";

    var days = document.createElement("div");
    days.className = "days";

    var day = document.createElement("h2");
    day = document.createTextNode("Day " + n);

    days.appendChild(day);
    lists.appendChild(days);

    var plists = document.createElement("ul");
    plists.id = "planlist";
    lists.appendChild(plists);

    var lis = document.createElement("li");
    plists.appendChild(lis);

    document.getElementById("plans").appendChild(lists);

}

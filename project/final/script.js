

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
                        "description": "<strong>7.Three Pool mirroring the moon</strong><p><a href=\"http://www.mtpleasantdc.com/makeitmtpleasant\" target=\"_blank\" title=\"Opens in a new window\">link</a> add to list button </p>",
                        "icon": "star"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates":  [120.1453, 30.2388]
                    }
                },{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>8.Four Season hotel Hangzhou</strong>",
                        "icon": "restaurant"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [120.1276, 30.2514]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>6.Fish Viewing at the Flower Pond </strong>",
                        "icon": "star"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [120.137470, 30.231010]
                    }
                },
                  {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>5.Orioles Singing in the Willows </strong>",
                        "icon": "star"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [120.157753, 30.239552]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>4.Remnant Snow on the Bridge in Winter </strong>",
                        "icon": "star"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [120.1497753, 30.2592552]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>3.Moon over the Peaceful Lake in Autumn </strong>",
                        "icon": "star"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [120.14527, 30.2532]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>2.Curved Yard and Lotus Pool in Summer </strong>",
                        "icon": "star"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [120.13159, 30.24603]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>1.Dawn on the Su Causeway in Spring </strong>",
                        "icon": "star"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [120.137808, 30.248343]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>9.Lou Wai Lou</strong>",
                        "icon": "restaurant"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [120.1409, 30.2503]
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
map.scrollZoom.disable();

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
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

// ===================  add plan =====================

var n = 0;
var counter = 1;

function addops() {
    n = n+1;
    var x = document.getElementById("s");
    var option = document.createElement("option");
    option.text = "DAY " + n;
    option.id = "btn" + n;
    option.selected = true;
    option.value = n;
    x.add(option);

    var newlist = document.createElement("div");
    newlist.className = "newlist";
    newlist.id = "day" + n;

    var uls = document.createElement("ul");
    uls.id = "list" + n;
    uls.className = "planlist";
    uls.setAttribute("ondrop", "drop(event)");
    uls.setAttribute("ondragover", "allowDrop(event)");
    newlist.appendChild(uls);
    // document.getElementById("day"+n).style.display = "block";


    if(option.id !== "btn" + n && newlist.id !== "btn" + n){
        console.log("ssssss");
        newlist.style.display = "none";
        console.log("sajsjsk");
    }

    document.getElementById("list-container").appendChild(newlist);
}



console.log("map.js is loaded!");


// Define function to create map
function createMap(prisons) {

    // Define satellite base map
    var satelliteMap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/satellite-v9',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: accessToken
    });

    // Define a basemap object to hold our base maps
    var baseMaps = {
        "Satellite Map" : satelliteMap
    };

    // Create map and define characteristic to load initially
    var myMap = L.map("mapid", {
        center: [15.18, 39.78],
        zoom: 8,
        layers: [satelliteMap]
    });

    // Create a layer control and pass in maps
    L.control.layers(baseMaps, {
        collapsed: true
    }).addTo(myMap);

}

createMap();
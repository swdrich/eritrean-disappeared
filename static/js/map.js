console.log("map.js is loaded!");


// Define function to create features
// function createFeatures() {


    // Define function to create boundaries
    function drawBorders() {
        var link = "../resources/world-administrative-boundaries.geojson";

        d3.json(link).then(function(data) {
            console.log(data);
    
            var borders = L.geoJson(data, {
                style: function(feature) {
                    return {
                        color: "black",
                        weight: 2
                    };    
                },
            })
            return borders;
        })
    
    }

// }
// createFeatures();

// Define function to create map
function createMap() {

    // Define satellite base map
    var satelliteMap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/satellite-v9',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: accessToken
    });

    // Define administrative borders
    var borders = d3.json("../resources/world-administrative-boundaries.geojson").then(function(data) {
        console.log(data);
    });
    
    // Define prison locations
    var prisons = d3.json("../resources/eritrean_prisons.geojson").then(function(data){
        console.log(data);
    });
        
    // Define a basemap object to hold our base maps
    var baseMaps = {
        "Satellite Map" : satelliteMap
    };

    // Define an overlaymap object to hold our overlay maps
    var overlayMaps = {
        "Administrative Boundaries": borders,
        "Prisons": prisons
    };

    // Create map and define characteristic to load initially
    var myMap = L.map("mapid", {
        center: [15.18, 39.78],
        zoom: 8,
        layers: [satelliteMap, borders, prisons]
    });

    // Create a layer control and pass in maps
    L.control.layers(baseMaps, overlayMaps, {
        collapsed: true
    }).addTo(myMap);

}

createMap();
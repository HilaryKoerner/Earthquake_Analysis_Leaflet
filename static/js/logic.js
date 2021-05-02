
// Create a map object.
var myMap = L.map("map", {
    center: [15.5994, -15.6731],
    zoom: 3
  });
  
  // Add a tile layer.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  
  //earthquake link
  var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
  
  function onEachFeature(feature, layer) {
    var content = (
  
      "<div>Location:"+ feature.properties.place+"</div>"+"<div>Magnitude:"+ feature.properties.mag+"</div>"+"<div>Depth:"+ feature.geometry.coordinates[2]+"</div>"
    );
    layer.bindPopup(content);
  }
  
  // function fillColor(depth) {
  //   if (depth ==77.7) return "red";
  //   if (depth ==20) return "orange";
  //   if (depth ==19.34) return "yellow";
  //   if (depth ==11.61) return "green";
  //   if (depth ==10) return "purple";
  //   if (depth ==82.28) return "blue";
  //   return "teal";
  // };
  
    // Create a new choropleth layer.
    geojson = L.choropleth(data, {
  
      // Define which property in the features to use.
      valueProperty: "mag",
  
      // Set the color scale.
      scale: ["#ffffb2", "#b10026"],
  
      // The number of breaks in the step range
      steps: 10,
  
      // q for quartile, e for equidistant, k for k-means
      mode: "q",
      style: {
        // Border color
        color: "#fff",
        weight: 1,
        fillOpacity: 0.8
      }
    })
  
  
  
  function createMap(mapData) {
    // L.marker([87,41]).addTo(myMap).bindPopup("Hello").openPopup();
    L.geoJSON(mapData, 
      {
        onEachFeature: onEachFeature,
        pointToLayer: function(feature, latlng) {
          return L.circleMarker(
            latlng, {
              radius: +feature.properties.mag*5,
              fillColor: fillColor(feature.geometry.coordinates[2]),
              color: "white",
              weight: 1,
              opacity: .2,
              fillOpacity: .8
            }
          );
        }
      }
    ).addTo(myMap);
  }
  
  //earthquake data
  d3.json(url)
    .then(function(data) {
      console.log(data);
      createMap(data);
      });
  
    bubbles = L.bubbleLayer(data, { property: "mag" })
  
  
      // Creating a GeoJSON layer with the retrieved data
      L.geoJson(data, {
        style: function(feature) {
          return{
            color: "white",
            fillColor: magnitudeSize(feature.properties.mag),
          }
        }
        {
          color: "",
          size: magnitudeSize(data),
      }).addTo(myMap);
      }
    
      
  // Loop through the cities array, and create one marker for each city object.
  for (var i = 0; i < countries.length; i++) {
  
    // Conditionals for country points
    var color = "";
    if (countries[i].points > 200) {
      color = "yellow";
    }
    else if (countries[i].points > 100) {
      color = "blue";
    }
    else if (countries[i].points > 90) {
      color = "green";
    }
    else {
      color = "red";
    }
  
    // Add circles to the map.
    L.circle(countries[i].location, {
      fillOpacity: 0.75,
      color: "white",
      fillColor: color,
      // Adjust the radius.
      radius: countries[i].points * 1500
    }).bindPopup("<h1>" + countries[i].name + "</h1> <hr> <h3>Points: " + countries[i].points + "</h3>").addTo(myMap);
  }
  
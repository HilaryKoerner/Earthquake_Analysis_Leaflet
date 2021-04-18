
// Create a map object.
var myMap = L.map("map", {
  center: [15.5994, -28.6731],
  zoom: 2
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);


//earthquake link
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson"

//circle color based on size
var magnitudeSize = {

};

//earthquake data
d3.json(url)
  .then(function(data) {
    console.log(data);

    var quakes = [];

    data.forEach(function(quake) {
      var quake = L.circle([quake.coordinates]);
      quake.addTo(myMap)
      quakes.push(quake);
    });
  })


  bubbles = L.bubbleLayer(data, { property: "mag" })


//     // Creating a GeoJSON layer with the retrieved data
//     L.geoJson(data, {
//       style: function(feature) {
//         return{
//           color: "white",
//           fillColor: magnitudeSize(feature.properties.mag),

//         }
//       }
//       {
//         color: "",
//         size: magnitudeSize(data),
//     }).addTo(myMap);
// });



// // Loop through the cities array, and create one marker for each city object.
// for (var i = 0; i < countries.length; i++) {

//   // Conditionals for country points
//   var color = "";
//   if (countries[i].points > 200) {
//     color = "yellow";
//   }
//   else if (countries[i].points > 100) {
//     color = "blue";
//   }
//   else if (countries[i].points > 90) {
//     color = "green";
//   }
//   else {
//     color = "red";
//   }

//   // Add circles to the map.
//   L.circle(countries[i].location, {
//     fillOpacity: 0.75,
//     color: "white",
//     fillColor: color,
//     // Adjust the radius.
//     radius: countries[i].points * 1500
//   }).bindPopup("<h1>" + countries[i].name + "</h1> <hr> <h3>Points: " + countries[i].points + "</h3>").addTo(myMap);
// }

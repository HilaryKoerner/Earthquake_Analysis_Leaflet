
// Create a map object.
var myMap = L.map("map", {
    center: [41.878113, -87.629799],
    zoom: 4
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
  
  colors = ["#32CD32",'#478778',"#7CFC00", "#ccff33", "#ffcc00", "#ff3300"]

  function fillColor(depth) {
    if (depth <=10) return colors[0];
    if (depth <=30) return colors[1];
    if (depth <=50) return colors[2];
    if (depth <=70) return colors[3];
    if (depth <=90) return colors[4];
    return colors[5];
  };

  
  function createMap(mapData) {
    // L.marker([87,41]).addTo(myMap).bindPopup("Hello").openPopup();
    L.geoJSON(mapData, 
      {
        onEachFeature: onEachFeature,
        pointToLayer: function(feature, latlng) {
          return L.circleMarker(
            latlng, {
              radius: +feature.properties.mag*4,
              fillColor: fillColor(+feature.geometry.coordinates[2]),
              color: "black",
              weight: 2,
              opacity: .2,
              fillOpacity: .6
            }
          );
        }
      }
    ).addTo(myMap);

    // add legend

    var legend = L.control({ position: "bottomright" });
    legend.onAdd = function() {
      var div = L.DomUtil.create("div", "info legend");
       
      var depth = [-10, 10, 30, 50, 70, 90];
      var colors = ["#32CD32",'#478778',"#7CFC00", "#ccff33", "#ffcc00", "#ff3300"];

      for (var i = 0; i < depth.length; i++) {
        div.innerHTML += "<i style='background: " + colors[i] + "'></i> "
            + depth[i] + (depth[i + 1] ? "&ndash;" + depth[i + 1] + "<br>" : "+");
    }
    return div;
  

    };
  
    // Adding the legend to the map
    legend.addTo(myMap);
  
  };
  

  //earthquake data
  d3.json(url)
    .then(function(data) {
      console.log(data);
      createMap(data);
      });


//          // set up legend
//     var legend = L.control({
//         position: "bottomright"
//     });
//     legend.onAdd = function createLegend(legend)
//         { 
//         }
//         legend.addTo(myMap);
//   }
# Earthquake Analysis using Leaflet

## The Data
The data for this challenge comes from the United States Geological Survey, or USGS for short. The USGS is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. 

## Pulling in the Data and Creating the Map
The data for this analysis comes from the url: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson. On this site, there is the option to select earthquakes from the past day, week, month, etc. The specific URL I selected contains data on all earthquakes from the past seven days. To create the base map, I created a map object and added a tile layer using open street map. 

## Displaying the Data
The earthquake data includes information on the magnitude, coordinates, name of the location, and depth. 

### Depth: 
The depth of each earthquake is represented by the color. The colors and depth ranges were hard coded using a funtion called "fillColor". I selected a color scale that would represent the depths by lighter and darker shades of green, red, orange and yellow. 
### Magnitude: 
I used a function to add a circle marker to the map with the radius dynamically created by the magnitude of the earthquake and pulling in the color with the "fillColor" function. 
### Legend:
Using a legend, I displayed the depth range and color range in the bottom right corner of the website. 
### Popup:
To display the specific data for each earthquake, I created a feature to pulled in and displayed the location, magnitude, and depth. 


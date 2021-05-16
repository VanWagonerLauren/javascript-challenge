// from data.js
var tableData = data;
//Console.log the UFO Sightings from data.js
console.log(tabledata)
//loop through data and console.log each sighting object
var tbody = d3.select("tbody");
    console.log(data);
//use d3 to append the one table row ('tr') for each UFO sighting object
data.forEach(function(UFOsighting
    console.log(UFOsighting)
//use object.entries to console.log each value
data.forEach(function(UFOsighting) {
    console.log(UFOsighting);
var row = tbody.append("tr");
});
Object.entries(UFOsighting).forEach(function([key, value]) {
    console.log(key, value);
  });
});
//use d3 to append 1 cell per value
data.forEach(function(UFOsighting) {
    console.log(UFOsighting);
var row = tbody.append("tr");
Object.entries(UFOsighting).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value)
  });
});
var button = d3.select("#filter-btn");
button.on("click", function(event){
    d3.event.preventDefault();
    tbody.html("");
//use d3 to update each cells text with values
var inputElement = d3.select("#datetime");
var inputValue = inputElement.property("value");
console.log(inputValue);
var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
console.log(filteredData);
filteredData.forEach(function(selections) {
    console.log(selections);

data.forEach(function(UFOsighting) {
    console.log(UFOsighting);
var row = tbody.append("tr");


Object.entries(UFOsighting).forEach(function([key, value]) {
    console.log(key, value);
var cell = row.append("td");
cell.text(value);
  });
});
// Arrow Functions
data.forEach((UFOsighting) => {
    var row = tbody.append("tr");
    Object.entries(UFOsighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

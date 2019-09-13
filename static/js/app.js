// from data.js
var tableData = data;

// console.log(tableData)

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// appends data from data.js to index.html
function appendTable(table){
table.forEach((sighting) => {
    
    var row = tbody.append("tr");

    Object.entries(sighting).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value)
    });
})}

appendTable(tableData);

// filters data by date
var filter = d3.select("#filter-btn");

filter.on("click", function(){

    // Prevent the page from refreshing
  d3.event.preventDefault();

    // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filteredData = tableData.filter(date => date.datetime === inputValue);
  
  
  tbody.html("")
  appendTable(filteredData);


})
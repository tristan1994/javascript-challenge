// from data.js
var tableData = data;

// YOUR CODE HERE!
//console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Now adding table to the HTML
tableData.forEach(function(UFOSighting){
    //console.log(UFOSighting);
    var row = tbody.append("tr");

    Object.entries(UFOSighting).forEach(function([key, value]){
        var cell = row.append("td");
        cell.text(value);
    });
});



var button = d3.select("#filter-btn");

// Select the form 
var form = d3.select(".form-group");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// Create an eventlistener to filter the table.
function runEnter() {
    //Clear out existing table
    tbody.html("");
    
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the user input location
    var inputElement = d3.select('#datetime');

    // Get the value from the input
    var inputValue = inputElement.property('value');

    //console.log(inputvalue);

    // This code will filter the user input
    var filteredInput = tableData.filter(data => data.datetime === inputValue);
    
    filteredInput.forEach(function(dateSelection){
        // for each element create a row
        var row = tbody.append("tr");

        Object.entries(dateSelection).forEach(function([key, value]){
            var cell = row.append("td");
            cell.text(value);
        });
    });

};



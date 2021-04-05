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
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the user input location
    var inputDate = d3.select('#datetime');
    var inputCity = d3.select('#city');
    var inputState = d3.select('#state');
    var inputCountry = d3.select('#country');
    var inputShape = d3.select('#shape');

    // Get the value from the input
    var inputValueDate = inputDate.property('value');
    var inputValueCity = inputCity.property('value');
    var inputValueState = inputState.property('value');
    var inputValueCountry = inputCountry.property('value');
    var inputValueShape = inputShape.property('value');
    

    // This code will filter the user input
    var filteredInput = data;
    
    //Check using if for variables
    if (inputValueDate) {
        filteredInput = filteredInput.filter(selection => selection.datetime === inputValueDate)
    };
    if (inputValueCity) {
        filteredInput = filteredInput.filter(selection => selection.city === inputValueCity)
    };
    if (inputValueState) {
        filteredInput = filteredInput.filter(selection => selection.state === inputValueState)
    };
    if (inputValueCountry) {
        filteredInput = filteredInput.filter(selection => selection.country === inputValueCountry)
    };
    if (inputValueShape) {
        filteredInput = filteredInput.filter(selection => selection.shape === inputValueShape)
    };
    //Clear out existing table
    tbody.html("");

    filteredInput.forEach(function(selection){
        // for each element create a row
        var row = tbody.append("tr");

        Object.entries(selection).forEach(function([key, value]){
            var cell = row.append("td");
            cell.text(value);
        });
    });
    
};


// Code your solution here

/*
We have an array of drivers with various information. We need to write functions using 
the filter() method so that PickMeUp Taxi service employees can easily query the data. 
Run the tests to see what conditions need to be met by each function before you start 
writing JavaScript code.

You'll be writing three functions:

> findMatching- This function takes an array of drivers' names and a string as arguments, 
and returns the matching list of drivers. The function should be case insensitive.

> fuzzyMatch - This function takes an array of drivers' names and a string as arguments 
for querying the array, and returns all drivers whose names begin with the provided letters.

> matchName - This function takes an array of driver objects and a string as arguments. 
Each driver object has two properties: name and hometown. The function should return each 
element whose name property matches the provided string argument.

*/

function findMatching(drivers, query) {
    // code below: returns a filtered list of drivers(in lower case) based on a query (also in lower case)
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}

function fuzzyMatch(drivers, query) {
    // code below: returns a filters list of drivers(in lower case) based on a query that starts with X
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}

function matchName(driverObjects, query) {
    //code below: returns a filtered list of drivers based on their name and hometown (new object)
    return driverObjects.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
}
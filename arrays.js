const csvString = "ID,Name,Occupation,Age\r\n42,Bruce,Knight,41\r\n57,Bob,Fry Cook,19\r\n63,Blaine,Quiz Master,58\r\n98,Bill,Doctor’s Assistant,26";
// Part 1: Refactoring Old Code
// Split the CSV string into rows
//let rows = csvString.split('\r\n');

// Parse each row into an array of cells
//let data = rows.map(row => row.split(','));

//console.log(data);

// Part 2: Expanding Functionality
// Split the CSV string into rows based on the newline sequence
let rows = csvString.split('\r\n');

// Determine the number of columns from the header row
let header = rows[0].split(',');

// Parse each row into an array of cells
let data = rows.map(row => row.split(','));

console.log(data);

// Part 3: Transforming Data
// Transform each row (excluding the header) into an object
let objects = data.slice(1).map(row => {
    let obj = {};
    row.forEach((cell, index) => {
        // Use the header to create keys and assign corresponding cell values
        obj[header[index].toLowerCase()] = cell;
    });
    return obj;
});

console.log(objects);

// Part 4: Sorting and Manipulating Data
// Remove the last element from the array
objects.pop();

// Insert a new object at index 1
objects.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

// Add a new object to the end of the array
objects.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

console.log('Modified Objects:', objects);

// Calculate the average age of the group
let totalAge = 0;
let count = 0;

// Iterate through each object to sum up the ages
objects.forEach(obj => {
    totalAge += parseInt(obj.age, 10); // Convert age from string to integer
    count++;
});

// Calculate the average by dividing the total age by the number of objects
let averageAge = totalAge / count;
console.log('Average Age:', averageAge);
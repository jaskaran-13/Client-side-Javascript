// Step1 here we fetch data from json
fetch('data.json')
.then(response => response.json()) // Convert response to JSON
.then(data => {
 // step 2: Get container from HTML
    const container = document.getElementById('flavour-container');

    //  Step 3: Loop through each flavour in JSON
    data.flavours.forEach(flavour => {
// Created a new div for very flavour
        const card = document.createElement('div');

        let calorieLevel = "";
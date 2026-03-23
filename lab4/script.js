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
         //step 4: Check range of calories
        if (flavour.calories < 100) {
            calorieLevel = "Low Calories";
        } 
        else if (flavour.calories <= 200) {
            calorieLevel = "Medium Calories";
        } 
        else {
            calorieLevel = "High Calories";
        }
        // step 5:type meaning
        let typeMessage = "";

        // Add meaning based on type of flavour
        if (flavour.type === "Fruit") {
            typeMessage = "Fresh and fruity";
        } 
        else if (flavour.type === "Dessert") {
            typeMessage = "Sweet treat";
        } 
        else if (flavour.type === "Healthy") {
            typeMessage = "Good for healthy diet";
        } 
        else {
            typeMessage = "Energy boost";
        }
// step6 Display data
card.innerHTML = `
            <h2>${flavour.name}</h2>
            <p><strong>Calories:</strong> ${flavour.calories} (${calorieLevel})</p>
            <p><strong>Type:</strong> ${flavour.type}</p>
            <p><em>${typeMessage}</em></p>
            <hr>
        `;
  // Add card to container
        container.appendChild(card);
    });

})
.catch(error => {
    // Error handling
    console.log("Error loading JSON:", error);
});
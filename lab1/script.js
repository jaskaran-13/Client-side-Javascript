// Step1: Declare and initialize pet variables
let petName = "Cherry";
let petType = "";
let petAge = 0;
let isHungry = false;
let favoriteActivities = ["sleeping", "playing", "running", "eating"];
let mood = "";
// Step2: Declare arrays for random pet data
const petTypes = ["dog", "cat", "bird", "rabbit"];
const moods = ["happy", "sleepy", "excited", "hungry"];
// Step 3:generated random pet details
petType = petTypes[Math.floor(Math.random() * petTypes.length)];
petAge = Math.floor(Math.random() * 10);
mood = moods[Math.floor(Math.random() * moods.length)];
// Step4:update pet description on the webpage using basic math
function updatePetDescription() {
    let hungerStatus = isHungry ? "hungry" : "not hungry";
    let activity = favoriteActivities[Math.floor(Math.random() * favoriteActivities.length)];

    document.getElementById("petDescription").innerText =
        "Meet " + petName + ", a " + petAge + "-year-old " + petType +
        " who loves " + activity +
        " and is currently feeling " + mood +
        ". The pet is " + hungerStatus + ".";
}
//Step 5 : added Code to change pet name
function changeName() {
    let input = document.getElementById("nameInput").value;
    if (input !== "") {
        petName = input;
        updatePetDescription();
    }
}
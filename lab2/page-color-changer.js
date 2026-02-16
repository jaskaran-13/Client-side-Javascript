/****************************************************
 * LAB 2 – PAGE COLOR CHANGER
 ***/
document.addEventListener("DOMContentLoaded", function () {

/* STEP 1: selected required html elements by analyzing given html codes*/
// Red color slider
const redSlider = document.querySelector("#red");

// Green color slider
const greenSlider = document.querySelector("#green");

// Blue color slider
const blueSlider = document.querySelector("#blue");

// code to change background color
const body = document.body;

/*step2: code added event listner to sliders*/
// Listener for changes on red slider
redSlider.addEventListener("input", changeBackgroundColor);

// Listener for changes on green slider
greenSlider.addEventListener("input", changeBackgroundColor);

// Listener for changes on blue slider
blueSlider.addEventListener("input", changeBackgroundColor);

//step 3created function to change the backgriund color
function changeBackgroundColor() {

    // STEP 3.1: Get present values from sliders
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    // STEP 3.2: Created RGB color using slider values
    const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    // STEP 3.3: Changed the page background color
    body.style.backgroundColor = rgbColor;
}

});

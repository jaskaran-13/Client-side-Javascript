/****************************************************
 * LAB 2 – PAGE COLOR CHANGER
 ***/
/* STEP 1: selected required html elements by analyzing given html codes*/
// Red color slider
const redSlider = document.querySelector("#Red");

// Green color slider
const greenSlider = document.querySelector("#Green");

// Blue color slider
const blueSlider = document.querySelector("#Blue");

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

//start js code 
/*
STEP 1: Created a JavaScript constructor

*/

function ToyCar(name, brand, color, scale, material, price, year, stock, weight, modelNumber){

this.name = name
this.brand = brand
this.color = color
this.scale = scale
this.material = material
this.price = price
this.year = year
this.stock = stock
this.weight = weight
this.modelNumber = modelNumber


}
/*
STEP 2: Created  an object instance using the constructor
*/

let car1 = new ToyCar(

"Lamborghini Huracan",
"Maisto",
"Yellow",
"1:24 scale diecast",
"Diecast Metal",
29.99,
2023,
15,
"0.5kg",
"MT1234",


)
/*
STEP 3: Displayed the object properties on the webpage
*/

document.getElementById("name").innerHTML = car1.name
document.getElementById("brand").innerHTML = car1.brand
document.getElementById("color").innerHTML = car1.color
document.getElementById("scale").innerHTML = car1.scale
document.getElementById("material").innerHTML = car1.material
document.getElementById("price").innerHTML = car1.price
document.getElementById("year").innerHTML = car1.year
document.getElementById("stock").innerHTML = car1.stock

/*
STEP 4: Added  interaction so users can modify object properties

*/
//created function to change the toy car color
function changeColor(){

car1.color = "Red"
document.getElementById("color").innerHTML = car1.color

}
/*
STEP 5: created  function to apply discount to the toy car price
*/

function discount(){

car1.price = car1.price - 5
document.getElementById("price").innerHTML = car1.price

}
//start js code 
/*
STEP 1: Created a JavaScript constructor

*/

function ToyCar(name, brand, color, scale, material, price, year, stock, weight, modelNumber, image){

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
this.image = image

}
/*
STEP 2: Created  an object instance using the constructor
*/

let car1 = new ToyCar(

"Lamborghini Aventador",
"Maisto",
"Yellow",
"1:24",
"Diecast Metal",
29.99,
2023,
15,
"0.5kg",
"MT1234",
"https://i.imgur.com/OK8N8.png"

)

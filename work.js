console.log("check");

// meat sauce starch cheese

// meat _--_ beef, chicken - grilled or fried, turkey, steak, tofu, none

// sauce _--_ green-chili, maranara, red-chili, alfredo, tomato, mix,

// starch _--_ corn torilla soft - hard, flour tortilla soft hard, fettucini, spachetti, linguini, manacotti, ziti, angel hair

// cheese _--_ queso, cheddar, parm, provolone, colby,

// grab stuff that changes
let dish = document.querySelector(".dish");
let meat = document.querySelector(".meat");
let starch = document.querySelector(".starch");
let sauce = document.querySelector(".sauce");
let cheese = document.querySelector(".cheese");

// set it to a blank to start

meat.innerHTML = "";
starch.innerHTML = "";
sauce.innerHTML = "";
cheese.innerHTML = "";

// grab the buttons - give em functions work from bottom up
// start with change the cheese cycle through only the italian options
const itCheese = document.getElementById("itlCheese");
itCheese.addEventListener("click", rndmITLCheese);

function rndmITLCheese() {
  cheese.innerHTML = itlRndmCheese();
}

function itlRndmCheese() {
  switch (Math.floor(Math.random() * 9)) {
    case 0:
      return "Gorgonzola";
    case 1:
      return "Pecorino Toscano";
    case 2:
      return "Taleggio";
    case 3:
      return "Fontina d'Aosta";
    case 4:
      return "Parmigiano-Reggiano";
    case 5:
      return "Mozzarella di Bufala";
    case 6:
      return "Provolone";
    case 7:
      return "Robiola Peimonte";
    case 8:
      return "Asiago";
  }
}
// start with change the cheese cycle through only the mexican options
const mexCheese = document.getElementById("mex-cheese");
mexCheese.addEventListener("click", rndmMEXCheese);

function rndmMEXCheese() {
  cheese.innerHTML = mexRndmCheese();
}

function mexRndmCheese() {
  switch (Math.floor(Math.random() * 9)) {
    case 0:
      return "Queso Añejo";
    case 1:
      return "Queso Fresco";
    case 2:
      return "Cotija";
    case 3:
      return "Queso Panela";
    case 4:
      return "Asadero";
    case 5:
      return "Queso De Oxaca";
    case 6:
      return "Queso Blanco";
    case 7:
      return "Requeson";
    case 8:
      return "Crema Mexicana";
  }
}
// use the previous functions to pick mexican or italian cheese
const allCheese = document.getElementById("all-cheese");
allCheese.addEventListener("click", randoCheese);

function randoCheese() {
  switch (Math.floor(Math.random() * 2)) {
    case 0:
      return rndmMEXCheese();
    case 1:
      return rndmITLCheese();
  }
}

// now for the sauces
// again we will start south with mexican ones
const mexSauce = document.getElementById("mex-sauce");
mexSauce.addEventListener("click", rndmMexSauce);

function rndmMexSauce() {
  sauce.innerHTML = mexRndmSauce();
}

function mexRndmSauce() {
  switch (Math.floor(Math.random() * 6)) {
    case 0:
      return "Guacamole";
    case 1:
      return "Pico de gallo";
    case 2:
      return "Red Salsa";
    case 3:
      return "Salsa Verde";
    case 4:
      return "Green Chili";
    case 5:
      return "Enchilada sauce";
  }
}

// now italian sauce
const itlSauce = document.getElementById("itl-sauce");
itlSauce.addEventListener("click", rndmItlSauce);

function rndmItlSauce() {
  sauce.innerHTML = itlRndmSauce();
}

function itlRndmSauce() {
  switch (Math.floor(Math.random() * 6)) {
    case 0:
      return "Carbonara";
    case 1:
      return "Bolognese";
    case 2:
      return "Pesto";
    case 3:
      return "Marinara";
    case 4:
      return "Alfredo";
    case 5:
      return "Red Clam sauce";
  }
}

// now all sauces together

const allSauce = document.getElementById("all-sauce");
allSauce.addEventListener("click", randoSauce);

function randoSauce() {
  switch (Math.floor(Math.random() * 2)) {
    case 0:
      return rndmMexSauce();
    case 1:
      return rndmItlSauce();
  }
}

// now starch

// and finnaly all ingedeints all together and random
const allDish = document.getElementById("all");
allDish.addEventListener("click", fixMyDish);

function fixMyDish() {
  console.log("fix my dish");
}

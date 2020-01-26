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

// now starches

const mexStarch = document.getElementById("mex-starch");
mexStarch.addEventListener("click", rndmMexStarch);

function rndmMexStarch() {
  starch.innerHTML = mexRndmStarch();
}

function mexRndmStarch() {
  switch (Math.floor(Math.random() * 6)) {
    case 0:
      return "on top of hard flour tortillas";
    case 1:
      return "on top of soft corn tortillas";
    case 2:
      return "on top of soft flour tortillas";
    case 3:
      return "on top of hard corn tortillas";
    case 4:
      return "rolled inside of soft flour tortillas";
    case 5:
      return "rolled inside of soft corn tortillas";
  }
}

// italian pasta / starch

const itlStarch = document.getElementById("itl-starch");
itlStarch.addEventListener("click", rndmItlStarch);

function rndmItlStarch() {
  starch.innerHTML = itlRndmStarch();
}

function itlRndmStarch() {
  switch (Math.floor(Math.random() * 6)) {
    case 0:
      return "on top of spaghetti noodles";
    case 1:
      return "on top of fettucini noodles";
    case 2:
      return "on top of ziti noodles";
    case 3:
      return "on top of angel hair noodles";
    case 4:
      return "on top of pappardelle noodles";
    case 5:
      return "on top of fusilli lunghi noodles";
  }
}

// and now both starches together
const allStarch = document.getElementById("all-starch");
allStarch.addEventListener("click", randoStarch);

function randoStarch() {
  switch (Math.floor(Math.random() * 2)) {
    case 0:
      return rndmMexStarch();
    case 1:
      return rndmItlStarch();
  }
}
// DA MEATS

const mexMeat = document.getElementById("mex-meat");
mexMeat.addEventListener("click", rndmMexMeat);

function rndmMexMeat() {
  meat.innerHTML = mexRndmMeat();
}

function mexRndmMeat() {
  switch (Math.floor(Math.random() * 8)) {
    case 0:
      return "fried pulled pork";
    case 1:
      return "finely chopped beef steak";
    case 2:
      return "adobe chicken";
    case 3:
      return "carne asada";
    case 4:
      return "carnitas";
    case 5:
      return "chorizo";
    case 6:
      return "al pastor";
    case 7:
      return "barbacoa";
  }
}

// italian meat
const itlMeat = document.getElementById("itl-meat");
itlMeat.addEventListener("click", rndmItlMeat);

function rndmItlMeat() {
  meat.innerHTML = itlRndmMeat();
}

function itlRndmMeat() {
  switch (Math.floor(Math.random() * 8)) {
    case 0:
      return "prosciutto";
    case 1:
      return "pancetta";
    case 2:
      return "fried chicken";
    case 3:
      return "fried eggplant";
    case 4:
      return "porchetta";
    case 5:
      return "culatello";
    case 6:
      return "breasaola";
    case 7:
      return "barbacoa";
  }
}

// rando meat - how often do you read that in code?

const allMeat = document.getElementById("all-meat");
allMeat.addEventListener("click", randoMeat);

function randoMeat() {
  switch (Math.floor(Math.random() * 2)) {
    case 0:
      return rndmMexMeat();
    case 1:
      return rndmItlMeat();
  }
}

// seperate just mexican ingredients
const onlyMex = document.getElementById("all-mex");
onlyMex.addEventListener("click", allMexFood);

function allMexFood() {
  rndmMEXCheese();
  rndmMexSauce();
  rndmMexStarch();
  rndmMexMeat();
}

// seperate just italian ingrediants

const onlyItl = document.getElementById("all-itl");
onlyItl.addEventListener("click", allItlFood);

function allItlFood() {
  rndmITLCheese();
  rndmItlSauce();
  rndmItlStarch();
  rndmItlMeat();
}

// and finally all ingredients all together and randomized
const allDish = document.getElementById("all");
allDish.addEventListener("click", fixMyDish);
//  since we can't return multiple functions I'll divide up outcomes below
function fixMyDish() {
  console.log("fix my dish");
  switch (Math.floor(Math.random() * 9)) {
    case 0:
      return rndmOne();
    case 1:
      return rndmTwo();
    case 2:
      return rndmThree();
    case 3:
      return rndmFour();
    case 4:
      return rndmFive();
    case 5:
      return rndmSix();
    case 6:
      return rndmSeven();
    case 7:
      return rndmEight();
    case 8:
      return rndmNine();
  }
}

// divide  up the random outcomes to randomly different categories

function rndmOne() {
  rndmMEXCheese();
  rndmItlSauce();
  rndmItlStarch();
  rndmItlMeat();
}
function rndmTwo() {
  rndmMEXCheese();
  rndmMexSauce();
  rndmItlStarch();
  rndmItlMeat();
}
function rndmThree() {
  rndmMEXCheese();
  rndmMexSauce();
  rndmMexStarch();
  rndmItlMeat();
}
function rndmFour() {
  rndmITLCheese();
  rndmMexStarch();
  rndmItlSauce();
  rndmItlMeat();
}
function rndmFive() {
  rndmMexStarch();
  rndmMexMeat();
  rndmITLCheese();
  rndmItlSauce();
}

function rndmSix() {
  rndmMexSauce();
  rndmITLCheese();
  rndmItlStarch();
  rndmItlMeat();
}
function rndmSeven() {
  rndmMEXCheese();
  rndmMexSauce();
  rndmMexStarch();
  rndmItlMeat();
}
function rndmEight() {
  rndmMexSauce();
  rndmMexStarch();
  rndmITLCheese();
  rndmItlMeat();
}
function rndmNine() {
  rndmMEXCheese();
  rndmMexMeat();
  rndmItlSauce();
  rndmItlStarch();
}

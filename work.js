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
let veggies = document.querySelector(".veggies");

// set it to a blank to start

meat.innerHTML = "";
starch.innerHTML = "";
sauce.innerHTML = "";
cheese.innerHTML = "";
veggies.innerHTML = "";

// grab the buttons - give em functions work from bottom up
// start with italian veggies

const itlVeg = document.getElementById("itl-vegs");
itlVeg.addEventListener("click", rndmItlVeg);

function rndmItlVeg() {
  veggies.innerHTML = itlRndmVeg();
}

function itlRndmVeg() {
  switch (Math.floor(Math.random() * 6)) {
    case 0:
      return "broccoli and mushrooms";
    case 1:
      return "mushrooms onions peppers";
    case 2:
      return "peas and carrots";
    case 3:
      return "roasted zuchinni and cauliflower";
    case 4:
      return "garlic artichoke hearts";
    case 5:
      return "olives celery and fennel";
  }
}

// now mex vegs
const mexVeg = document.getElementById("mex-vegs");
mexVeg.addEventListener("click", rndmMexVeg);

function rndmMexVeg() {
  veggies.innerHTML = mexRndmVeg();
}

function mexRndmVeg() {
  switch (Math.floor(Math.random() * 8)) {
    case 0:
      return "tomatoes and tomatillos";
    case 1:
      return "jicama";
    case 2:
      return "chayote";
    case 3:
      return "spinach and cauliflower";
    case 4:
      return "mushrooms and zuchini";
    case 5:
      return "poblano and red chili peppers";
    case 6:
      return "green bell and jalapeño peppers";
    case 7:
      return "shredded lettuce, fresh mango salsa ";
  }
}

// now for a random from either for mex or itl for veggies
// lets give it a 50 50 shot of a random mex veg or itl veg
// button click
const allVeg = document.getElementById("all-vegs");
// add function
allVeg.addEventListener("click", randoVeg);
// make function

function randoVeg() {
  switch (Math.floor(Math.random() * 2)) {
    case 0:
      return rndmItlVeg();
    case 1:
      return rndmMexVeg();
  }
}

// now next we have cheese to cycle through starting with only the italian options
const itlCheese = document.getElementById("itlCheese");
itlCheese.addEventListener("click", rndmItlCheese);

function rndmItlCheese() {
  cheese.innerHTML = itlRndmCheese();
}

function itlRndmCheese() {
  switch (Math.floor(Math.random() * 9)) {
    case 0:
      return "gorgonzola";
    case 1:
      return "pecorino Toscano";
    case 2:
      return "taleggio";
    case 3:
      return "fontina d'Aosta";
    case 4:
      return "parmigiano-Reggiano";
    case 5:
      return "mozzarella di Bufala";
    case 6:
      return "provolone";
    case 7:
      return "robiola peimonte";
    case 8:
      return "asiago";
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
      return "queso añejo";
    case 1:
      return "queso fresco";
    case 2:
      return "cotija";
    case 3:
      return "queso panela";
    case 4:
      return "asadero";
    case 5:
      return "queso de oxaca";
    case 6:
      return "queso blanco";
    case 7:
      return "requeson";
    case 8:
      return "queso chihuahua";
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
      return rndmItlCheese();
  }
}

// now for the sauces
// again we will start  with italian ones
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
// now the mexican sauces

const mexSauce = document.getElementById("mex-sauce");
mexSauce.addEventListener("click", rndmMexSauce);

function rndmMexSauce() {
  sauce.innerHTML = mexRndmSauce();
}

function mexRndmSauce() {
  switch (Math.floor(Math.random() * 6)) {
    case 0:
      return "guacamole";
    case 1:
      return "pico de gallo";
    case 2:
      return "red salsa";
    case 3:
      return "salsa verde";
    case 4:
      return "green chili";
    case 5:
      return "enchilada sauce";
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

// pasta
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
// tortilla
const mexStarch = document.getElementById("mex-starch");
mexStarch.addEventListener("click", rndmMexStarch);

function rndmMexStarch() {
  starch.innerHTML = mexRndmStarch();
}

function mexRndmStarch() {
  switch (Math.floor(Math.random() * 6)) {
    case 0:
      return "on top of hard flour tortilla chips";
    case 1:
      return "on top of soft corn tortillas";
    case 2:
      return "on top of soft flour tortillas";
    case 3:
      return "on top of soft wheat tortillas";
    case 4:
      return "rolled inside of soft flour tortillas";
    case 5:
      return "rolled inside of blue corn tortillas";
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

// mex meat
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

// now individual ingredients done lets go big picture
// seperate just italian ingrediants

const onlyItl = document.getElementById("all-itl");
onlyItl.addEventListener("click", allItlFood);

function allItlFood() {
  rndmItlCheese();
  rndmItlSauce();
  rndmItlStarch();
  rndmItlMeat();
  rndmItlVeg();
}

// seperate just mexican ingredients
const onlyMex = document.getElementById("all-mex");
onlyMex.addEventListener("click", allMexFood);

function allMexFood() {
  rndmMEXCheese();
  rndmMexSauce();
  rndmMexStarch();
  rndmMexMeat();
  rndmMexVeg();
}

// and finally all ingredients all together and 'randomized'
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
  rndmItlVeg();
}
function rndmTwo() {
  rndmMEXCheese();
  rndmMexSauce();
  rndmItlStarch();
  rndmItlMeat();
  rndmMexVeg();
}
function rndmThree() {
  rndmMEXCheese();
  rndmMexSauce();
  rndmMexStarch();
  rndmItlMeat();
  rndmItlVeg();
}
function rndmFour() {
  rndmItlCheese();
  rndmMexStarch();
  rndmItlSauce();
  rndmItlMeat();
  rndmMexVeg();
}
function rndmFive() {
  rndmMexStarch();
  rndmMexMeat();
  rndmItlCheese();
  rndmItlSauce();
  rndmItlVeg();
}

function rndmSix() {
  rndmMexSauce();
  rndmItlCheese();
  rndmItlStarch();
  rndmItlMeat();
  rndmMexVeg();
}
function rndmSeven() {
  rndmMEXCheese();
  rndmMexSauce();
  rndmMexStarch();
  rndmItlMeat();
  rndmItlVeg();
}
function rndmEight() {
  rndmMexSauce();
  rndmMexStarch();
  rndmItlCheese();
  rndmItlMeat();
  rndmMexVeg();
}
function rndmNine() {
  rndmMEXCheese();
  rndmMexMeat();
  rndmItlSauce();
  rndmItlStarch();
  rndmItlVeg();
}

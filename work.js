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

const allDish = document.getElementById("all");
allDish.addEventListener("click", fixMyDish);

function fixMyDish() {
  console.log("fix my dish");
}

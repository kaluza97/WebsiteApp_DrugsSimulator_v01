const hamburger = document.querySelector("i");
const menu = document.querySelector(".menu");
const div_alcohol = document.querySelector(".menu_div_alcohol");
const div_ganja = document.querySelector(".menu_div_ganja");

const girl_start = document.getElementById("girlStart");
const girl_alcohol = document.getElementById("girlAlcohol");
const girl_ganja = document.getElementById("girlGanja");
girl_start.classList.add("active");

let Iclick = 0;
//obsługa menu hamburger
hamburger.addEventListener("click", function() {
  if (Iclick == 0) {
    menu.style.width = "140px";
    Iclick += 1;
  } else {
    menu.style.width = "0vw";
    Iclick = 0;
  }
});
//zmiana postaci i tla - alcohol
div_alcohol.addEventListener("click", function() {
  alert("the ALCOHOL animation has been enabled");
  girl_start.classList.remove("active");
  girl_ganja.classList.remove("active");
  girl_alcohol.classList.add("active");
  document.body.style.backgroundImage = 'url("wallpaper2.jpg")';
});

//zmiana postaci i tla - ganja
div_ganja.addEventListener("click", function() {
  alert("the MARIJUANA animation has been enabled");
  girl_start.classList.remove("active");
  girl_alcohol.classList.remove("active");
  girl_ganja.classList.add("active");
  document.body.style.backgroundImage = 'url("wallpaper3.jpg")';
});

function toggleMenu() {
  const body = document.body;
  const navbar = document.getElementById('navbar');
  const openMenu = document.getElementById('open-menu');
  navbar.classList.toggle('nav-active');
  body.classList.toggle('nav-active');
  if (navbar.classList.contains('nav-active')) {
      openMenu.style.opacity = '0';
      navbar.style.right = '0';
  } else {
      navbar.style.right = '-110%';
      openMenu.style.opacity = '1';
  }
}

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const scrollTop = window.scrollY;

  if (scrollTop > 0) {
      header.classList.add('fixed-header'); //avelacnum enq class ete scrolla exel
  } else {
      header.classList.remove('fixed-header'); // jnjum enq classy ete scrolly amena verevi masum e
  }
});


// slider
const SHOWING_CLASS = "showing";
const SLIDER_CONTENT = "slider__content";
const BTN_HOVER = "btnHover";
const sliders = document.querySelectorAll(".slider__content");
const firstSlide = sliders[0];
const lastSlide = sliders[sliders.length - 1];
const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");

function init() {
const currentSlider = document.querySelector(`.${SHOWING_CLASS}`);
if (currentSlider) {
  currentSlider.classList.remove(SHOWING_CLASS);
  firstSlide.classList.add(SHOWING_CLASS);
} else {
  firstSlide.classList.add(SHOWING_CLASS);
}
}

function slide(e) {
const target = e.currentTarget;
const currentSlider = document.querySelector(`.${SHOWING_CLASS}`);
currentSlider.classList.remove(SHOWING_CLASS);
if (target === leftBtn) {
  if (currentSlider.previousElementSibling) {
    currentSlider.previousElementSibling.classList.add(SHOWING_CLASS);
  } else {
    lastSlide.classList.add(SHOWING_CLASS);
  }
} else {
  if (currentSlider.nextElementSibling.className === SLIDER_CONTENT) {
    currentSlider.nextElementSibling.classList.add(SHOWING_CLASS);
  } else {
    firstSlide.classList.add(SHOWING_CLASS);
  }
}
}

function btnHover(e) {
const btn = e.target;
btn.classList.toggle("btnHover");
}

// Event
leftBtn.addEventListener("click", slide);
leftBtn.addEventListener("mouseenter", btnHover);
leftBtn.addEventListener("mouseleave", btnHover);
rightBtn.addEventListener("click", slide);
rightBtn.addEventListener("mouseenter", btnHover);
rightBtn.addEventListener("mouseleave", btnHover);

// Execute()
init();

// full screen foto 
function openFullscreen(src) {
// cuyc tal nkary fullscreen
const fullscreenImg = document.getElementById('fullscreen-img');
fullscreenImg.src = src;
document.querySelector('.fullscreen').style.display = 'flex';
}

function closeFullscreen() {  document.querySelector('.fullscreen').style.display = 'none'}

function searchText() {
var searchText = document.getElementById("searchInput").value.toLowerCase(); // poqratar enq sarqum hamematelu hamar
var allLinks = document.querySelectorAll("a");
var searchResult = document.getElementById("searchResult");
searchResult.innerHTML = "";
var found = false;
var uniqueLinks = new Set(); // ogtagorcum enq set unikal link gtnelu hamar

if (searchText.trim() === "") { // stugum enq inputy datark e te voch
    searchResult.style = "display:none";
    return; // ete inputy datark e dataracnel functiony
} else{
  searchResult.style = "display:flex"
  console.log(searchText);
}

for (var i = 0; i < allLinks.length; i++) {
    var linkText = allLinks[i].textContent.toLowerCase(); // poqratar enq sarqum hamematelu hamar
    var href = allLinks[i].href.toLowerCase(); // poqratar enq sarqum hamematelu hamar
    if (linkText.includes(searchText) || href.includes(searchText)) {
        // stugum enq avelacvel e ardyoq linky
        if (!uniqueLinks.has(href)) {
            var linkElement = document.createElement("a");
            linkElement.textContent = allLinks[i].textContent;
            linkElement.setAttribute("href", allLinks[i].href);
            linkElement.setAttribute("target", "_blank");
            linkElement.classList.add("found-link");
            searchResult.appendChild(linkElement);
            uniqueLinks.add(href); // Добавляем ссылку в Set
            found = true;
        }
    }
}

}

// Добавляем обработчик события input для поля ввода
document.getElementById("searchInput").addEventListener("input", searchText);

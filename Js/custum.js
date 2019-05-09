/*eslint-env browser*/

/* ----- Preload ----- */

var load = document.getElementById('load');

function preload() {

    'use strict';
    load.style.display = 'none';
}

window.addEventListener('load', preload);

/* ----- Scroll To Top ----- */

var header = document.getElementById('header');
var toTop = document.getElementById('scroll-up');

function smoothScroll() {

    'use strict';

    var scrollTop = window.pageYOffset || document.body.scrollTop;

    if (scrollTop > header.offsetHeight + 100) {

        toTop.style.visibility = 'visible';
        toTop.style.opacity = '1';
        toTop.style.bottom = "50px";

    } else {
        toTop.style.visibility = 'hidden';
    }
}

window.addEventListener('scroll', smoothScroll);

function clickToTop() {

    'use strict';

    var smoothy = setInterval(function () {
        window.scrollTo(0, window.scrollY - 50);

        if (window.scrollY <= 0) {

            clearInterval(smoothy);
        }

    }, 10);
}

toTop.addEventListener('click', clickToTop);


/* ----- Anchor to another Anchor ----- */


var links = document.querySelectorAll('.navbar .header-ul a');

function smooth_Scroll_Link(e) {

    'use strict';

    e.preventDefault();

    var start = window.scrollY,
        end = document.querySelector(this.getAttribute('href')).offsetTop,
        step = start < end ? 50 : -50;

    var scrolling = setInterval(function () {

        window.scrollBy(0, step);

        if (window.scrollY >= end) {

            clearInterval(scrolling);
        }

    }, 20);
}

for (var i = 0; i < links.length; i++) {

    links[i].addEventListener('click', smooth_Scroll_Link);
}

/* ----- Toggle Navbar ---- */

var hamburger = document.getElementById('hamburger');
var toggle = document.getElementById('toggle');
var closeNav = document.getElementById('closeNav');

function visibleToggle() {

    'use strict';
    toggle.style.width = '250px';
}

function close_Nav() {

    'use strict';
    toggle.style.width = '0';
}

hamburger.addEventListener('click', visibleToggle);
closeNav.addEventListener('click', close_Nav);

var linksToggle = document.querySelectorAll('#toggle .toggle-ul a');

for (var j = 0; j < linksToggle.length; j++) {

    linksToggle[j].addEventListener('click', smooth_Scroll_Link);
}



/* TypeWriter */

var typeString = ['Web Developer', 'Web Designer', 'Freelancer'];
var z = 0;
var count = 0
var selectedText = '';
var text = '';
(function type() {
    if (count == typeString.length) {
        count = 0;
    }
    selectedText = typeString[count];
    text = selectedText.slice(0, ++z);
    document.getElementById('typewriter').innerHTML = text;
    if (text.length === selectedText.length) {
        count++;
        z = 0;
    }
    setTimeout(type, 250);
}());


/* slider Glider for Tesimonails */

new Glider(document.querySelector('.glider'), {

    slidesToShow: 1,
    draggable: true,
    dots: '#dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
});

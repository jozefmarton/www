// ------NAVIGATION-----------

function openNav() {
    document.getElementById("myNav").style.width = "30%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

// ---------------------------------------BIŽU----------------------------------------
// https://github.com/michalsnik/aos
AOS.init();

// -------------------------------------SCROLL FUNCTIONS--------------------------------

window.onscroll = function () {
    myFunction()
};

var ele = document.body;

function myFunction() {
    if (window.pageYOffset > 100) {
        ele.classList.add("sticky-btn")
    } else {
        ele.classList.remove("sticky-btn");
    }
}


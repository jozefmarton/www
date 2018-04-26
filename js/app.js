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

// -------------------------------------SCROLL BTN UP--------------------------------

window.onscroll = function () {
    upBtn()
};

var ele = document.body;

function upBtn() {
    if (window.pageYOffset > 200) {
        ele.classList.add("sticky-btn")
    } else {
        ele.classList.remove("sticky-btn");
    }
}


// --------------------------------BACK TO TOP BTN------------------------------------

// -------------------------------------- BTN REMOVE FROM TOP----------------------------------
// var backToTop = $( '<a>', {
// 	href: '#home',
// 	class: 'back-to-top btn btn-up',
// 	html: '<i class="fa fa-angle-double-up" aria-hidden="true"></i>'
// });

// backToTop
// 	.hide()
// 	.appendTo('body')
// 	.on('click', function() {
// 		$('body').animate({scrollTop: 0});
// 	});

// var win = $(window);
// win.on('scroll', function(){
// 	if (win.scrollTop() >= 200 ) backToTop.fadeIn();
// 	else backToTop.hide();
// });

// --------------------------------------SCROLLOVANIE----------------------------------

var menu = $('.menu'),
	menuLinks = menu.find('a');														// v classe menu vyhlada linky <a>

menuLinks.on('click', function(event) {
	event.preventDefault();															// zabrani default akcii
	$('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);			// zoskrolovanie
	window.location.hash = this.hash;												// pridaj hash do url
});

// -------------------------------GALLERY LIGHTBOX----------------------------------------

var overlay = $('<div/>', { id: 'gl-overlay'});
	overlay.appendTo('body').hide();						// vztvori div s id v body a schova ho pri refreshi stranky

var gallery =$('.gallery'); 								// hladat v elemente s classom gallery

gallery.find('a').on('click', function(event) { 			// vyhladat <a> elementy v galerii

var href = $(this).attr('href');						// urobi premennu href a najde href v <a>
	image = $('<img>', { src: href, alt: 'portfolio img'});		// vytvori element <img> s atributmi

	overlay.html( image )									//prekryje overlay
			.show();

	overlay.show();											// zobrazi overlay po kliknuti na link
	event.preventDefault();      							//vypnut defaultnu funciu linku <a>

});

overlay.on('click', function() {							// zatvorenie kliknutim na ovarlay
	overlay.hide();
})

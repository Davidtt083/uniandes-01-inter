



function makeResizable(element) {
	if (element && jQuery(element).length) {
		var $el = jQuery(element);
		var elHeight = $el.outerHeight();
		var elWidth = $el.outerWidth();

		var $wrapper = $el.parent();

		var starterData = {
			size: {
				width: $wrapper.width(),
				height: $wrapper.height()
			}
		}
		var scale = Math.min(
			starterData.size.width / $el.outerWidth(),
			starterData.size.height / $el.outerHeight()
		);
		if (scale > 1) {
			scale = 1;
		}
		var elMarginBottom = (scale * elHeight) - starterData.size.height;
		$el.css({
			transform: "translate3d(-50%, 0, 0) " + "scale(" + scale + ")",
			'margin-bottom': elMarginBottom
		});
	}
}
jQuery(document).ready(function () {
	makeResizable('#very-specific-design');
});
jQuery(window).load(function () {
	//	makeResizable('#very-specific-design');
});
jQuery(window).resize(function () {
	makeResizable('#very-specific-design');
});

function mostrarp(divNum, btns, lot) {
	document.getElementById("text1").classList.add("hide");
	document.getElementById("text2").classList.add("hide");
	document.getElementById("text3").classList.add("hide");

	document.getElementById("lot1").classList.add("hide");
	document.getElementById("lot2").classList.add("hide");
	document.getElementById("lot3").classList.add("hide");


	document.getElementById("btn2").classList.remove("activo");
	document.getElementById("btn3").classList.remove("activo");
	document.getElementById("btn4").classList.remove("activo");



	// Show the specific div
	document.getElementById("text" + divNum).classList.remove("hide");
	document.getElementById("btn" + btns).classList.add("activo");
	document.getElementById("lot" + lot).classList.remove("hide");
}


// Cargar la primera animación en el primer div
var btn1 = document.getElementById('btn1');
var botonera = document.getElementById('botonera');
var anim1 = bodymovin.loadAnimation({
	container: div1,
	renderer: 'svg',
	loop: false,
	autoplay: false,
	path: 'pant1.json'
});

// Cargar la segunda animación en el segundo div
var div2 = document.getElementById('div2');
var anim2 = bodymovin.loadAnimation({
	container: div2,
	renderer: 'svg',
	loop: false,
	autoplay: false,
	path: 'test.json'
});

// Reproducir la primera animación cuando se hace clic en el primer div
btn1.addEventListener('click', function () {
	btn1.classList.add("hide2");
	anim1.playSegments([0, 72], true);
	anim1.addEventListener('complete', function () {
		anim1.pause();
	botonera.classList.remove("hide");

	});
});

// Reproducir la segunda animación cuando se hace clic en el segundo div
div2.addEventListener('click', function () {
	anim2.playSegments([50, 100], true);
});




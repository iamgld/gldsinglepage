(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Este es un ejemplo de como exportar funciones desde un archivo
// En index.js se importan estas funciones

// export const saludo = () => {
// 	console.log('Hola mundo')
//   };

//   export const despedida = () => {
// 	console.log('Adiós mundo')
//   };


// FUNCION QUE HACE AL MENU STICKY
var setMenuSticky = exports.setMenuSticky = function setMenuSticky(menuIdentifier) {
	var menuOffsetTop = menuIdentifier.offsetTop,
	    links = [].concat(_toConsumableArray(menuIdentifier.querySelectorAll('a')));
	window.addEventListener('scroll', function (event) {
		event.preventDefault();
		if (window.pageYOffset > menuOffsetTop) {
			menuIdentifier.classList.add('menuSticky');
			links.map(function (link) {
				link.classList.add('menuSticky-link');
			});
		} else {
			menuIdentifier.classList.remove('menuSticky');
			links.map(function (link) {
				link.classList.remove('menuSticky-link');
			});
		}
	});
};

// // TODO Refactorisar

var eventClickForSmoothScrolling = exports.eventClickForSmoothScrolling = function eventClickForSmoothScrolling(menuIdentifier) {
	menuIdentifier.addEventListener('click', function (e) {
		if (e.target.hash && document.title == 'Gregorlopezdev') {
			e.preventDefault();
			var hash = e.target.hash.slice(1);
			// console.dir(e.target);
			if (document.getElementById(hash)) {
				initScroll(hash, menuIdentifier);
			}
		}
	});
};
var initScroll = function initScroll(hash, menuIdentifier) {
	var destination = document.getElementById(hash).offsetTop,
	    scroll = window.scrollY,
	    speed = 40;
	var menuIdentifierHeight = menuIdentifier ? menuIdentifier.clientHeight : 0;
	destination -= menuIdentifierHeight;
	// console.log(hash);
	var scroller = setInterval(function () {
		if (destination >= scroll) {
			scroll += speed;
			window.scroll(0, scroll);
			if (destination <= scroll) {
				clearInterval(scroller);
			}
		}
		if (destination <= scroll) {
			scroll -= speed;
			window.scroll(0, scroll);
			if (destination >= scroll) {
				clearInterval(scroller);
			}
		}
	}, 10);
};

var scrollup = function scrollup(button) {
	var hash = button.parentNode.id;
	scrollupButton.addEventListener('click', function (e) {
		initScroll(hash);
	});
};
var scrollupEvent = exports.scrollupEvent = function scrollupEvent(limit, button) {
	var heightLimit = limit.clientHeight,
	    heightScroll = void 0;
	var scrollerDown = setInterval(function () {
		heightScroll = window.scrollY;
		if (heightLimit <= heightScroll) {
			clearInterval(scrollerDown);
			button.classList.toggle('active');
			scrollup(button);
			var scrollerUp = setInterval(function () {
				var heightScroll = window.scrollY;
				if (heightLimit >= heightScroll) {
					clearInterval(scrollerUp);
					button.classList.toggle('active');
					scrollupEvent(limit, button);
				}
			}, 500);
		}
	}, 500);
};

},{}],2:[function(require,module,exports){
'use strict';

var _menu = require('./modules/menu');

(0, _menu.setMenuSticky)(document.getElementById('menu')); // Funcion que hace sticky al menu


(0, _menu.eventClickForSmoothScrolling)(document.getElementById('menu'));
// Primer parametro elemento el cual sera el limite para que aparesca el button
// Segundo parametro elemento donde esta el buttom
(0, _menu.scrollupEvent)(document.getElementById('bannerHeader'), document.getElementById('scrollupButton'));

// FUNCION DE LOS CONTENIDOS TOGGLEABLES EN LA SECCION ABOUTME
var changeDirectionAboutmeButton = function changeDirectionAboutmeButton(element) {
	var button = element.querySelector('.aboutme-button');
	button.addEventListener('click', function (e) {
		// console.dir(button);
		button.classList.toggle('icon-arrow-down');
		button.classList.toggle('icon-arrow-up');
		button.nextElementSibling.classList.toggle('active');
	});
};
changeDirectionAboutmeButton(document.getElementById('aboutme'));

// FUNCION DE LOS CONTENIDOS TOGGLEABLES EN LA SECCION STUDIES
var changeDirectionStudiesArrowIndicator = function changeDirectionStudiesArrowIndicator(element) {
	element.addEventListener('click', function (e) {
		var target = e.target;
		if (target.classList.contains('studies-details_title')) {
			// console.dir(target)
			target.previousElementSibling.classList.toggle('icon-arrow-right');
			target.previousElementSibling.classList.toggle('icon-arrow-down');
			target.nextElementSibling.classList.toggle('active');
		}
	});
};
changeDirectionStudiesArrowIndicator(document.getElementById('studies'));

},{"./modules/menu":1}]},{},[2]);

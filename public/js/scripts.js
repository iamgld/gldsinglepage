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

// --------------------------------------------------------------------------------
// Funcion que hace sticky al menu
(0, _menu.setMenuSticky)(document.getElementById('menu'));
// --------------------------------------------------------------------------------
// Funcion que toda al menu de un efeco smooth
// Importacion de modulos
(0, _menu.eventClickForSmoothScrolling)(document.getElementById('menu'));
// --------------------------------------------------------------------------------
// Funcion que hace aparece el button de ir arriba
// Primer parametro elemento el cual sera el limite para que aparesca el button
// Segundo parametro elemento donde esta el buttom
(0, _menu.scrollupEvent)(document.getElementById('bannerHeader'), document.getElementById('scrollupButton'));
// --------------------------------------------------------------------------------
// Funcion de los contenidos toggleables en la seccion aboutme
var changeDirectionAboutmeButton = function changeDirectionAboutmeButton(element) {
	if (element) {
		var button = element.querySelector('.aboutme-button');
		var status = false;
		if (button) {
			button.addEventListener('click', function (e) {

				// Cambio del icono de flecha y animationTimingFunction
				button.classList.toggle('icon-arrow-down');
				button.classList.toggle('icon-arrow-up');
				button.classList.contains('icon-arrow-up') ? button.style.animationTimingFunction = "ease-in" : button.style.animationTimingFunction = "";

				// Añadimos will-change a los elementos que van a ser animados
				button.nextElementSibling.style.willChange = "max-height";

				// Animacion de entrada del contenido oculto
				button.nextElementSibling.classList.toggle('enable');

				// El if es para agregar enable en el primer click y luego en los posteriores ir haciendo toggle entre enable y disable
				if (status) {
					// Animacion de salida del contenido oculto					
					button.nextElementSibling.classList.toggle('disable');
				} else {
					status = true;
				}

				// Removemos el will-change cuando las animaciones terminen
				button.nextElementSibling.addEventListener('animationend', function (e) {
					// console.log(e);
					e.target.style.willChange = "auto";
				});
			});
		} else {
			console.error('No se encontro "aboutme-button"');
		}
	} else {
		console.error('No se le paso un "element"');
	}
};
changeDirectionAboutmeButton(document.getElementById('aboutme'));
// --------------------------------------------------------------------------------
// Funcion de los contenidos toggleables de la seccion studies
var changeDirectionStudiesArrowIndicator = function changeDirectionStudiesArrowIndicator(element) {
	if (element) {
		element.addEventListener('click', function (e) {

			var target = e.target;
			var targetPreviousElement = target.previousElementSibling;
			var targetNextElement = target.nextElementSibling;

			if (targetPreviousElement.classList.contains('icon-arrow-right')) {
				// si contiene la clase icon-arrow-right se le agrega enable

				if (target.classList.contains('studies-details_title')) {
					// Añadimos will-change a los elementos que van a ser animados
					targetNextElement.style.willChange = "max-height";
					// console.log('mostrar')

					// Cambio del icono de flecha				
					targetPreviousElement.classList.toggle('icon-arrow-right');
					targetPreviousElement.classList.toggle('icon-arrow-down');

					// Nos aseguramos que no tenga la animacion de salida
					targetNextElement.classList.remove('disable');
					// Agregamos la animacion de entrada
					targetNextElement.classList.add('enable');

					// Removemos el will-change cuando las animacion termine
					targetNextElement.addEventListener('animationend', function (e) {
						targetNextElement.style.willChange = "auto";
					});
				} else {
					console.error('No se encontro el activador de la animacion');
				}
			} else if (targetPreviousElement.classList.contains('icon-arrow-down')) {
				// si no lo contiene se el agrega disable

				if (target.classList.contains('studies-details_title')) {
					// Añadimos will-change a los elementos que van a ser animados
					targetNextElement.style.willChange = "max-height";
					// console.log('ocultar')

					// Cambio del icono de flecha				
					targetPreviousElement.classList.toggle('icon-arrow-right');
					targetPreviousElement.classList.toggle('icon-arrow-down');

					// Nos aseguramos que no tenga la animacion de entrada
					targetNextElement.classList.remove('enable');
					// Agregamos la animacion de salida
					targetNextElement.classList.add('disable');

					// Removemos el will-change cuando las animacion termine
					targetNextElement.addEventListener('animationend', function (e) {
						targetNextElement.style.willChange = "auto";
					});
				} else {
					console.error('No se encontro el activador de la animacion');
				}
			} else {
				console.error('No se encontro ningun icon-arrow');
			}
		});
	} else {
		console.error('No se le paso un "element"');
	}
};
changeDirectionStudiesArrowIndicator(document.getElementById('studies'));
// --------------------------------------------------------------------------------

},{"./modules/menu":1}]},{},[2]);

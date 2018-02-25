'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var setMenuSticky = function setMenuSticky(menuIdentifier) {
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
setMenuSticky(menu);

// TODO Refactorisar

var eventClickForSmoothScrolling = function eventClickForSmoothScrolling(menuIdentifier) {
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
	    speed = 30;
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
eventClickForSmoothScrolling(menu);

var scrollup = function scrollup(button) {
	var hash = button.parentNode.id;
	scrollupButton.addEventListener('click', function (e) {
		initScroll(hash);
	});
};
var scrollupEvent = function scrollupEvent(limit, button) {
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
// Primer parametro elemento el cual sera el limite para que aparesca el button
// Segundo parametro elemento donde esta el buttom
scrollupEvent(bannerHeader, scrollupButton);
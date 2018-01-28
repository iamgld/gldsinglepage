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
setMenuSticky(menuSticky);
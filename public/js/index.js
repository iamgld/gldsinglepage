'use strict';

var changeDirectionAboutmeButton = function changeDirectionAboutmeButton(element) {
	var textHidden = element.querySelector('p:last-of-type'),
	    button = element.querySelector('.aboutme-button');
	button.addEventListener('click', function (e) {
		textHidden.classList.toggle('active');
		button.classList.toggle('icon-arrow-double-down');
		button.classList.toggle('icon-arrow-double-up');
	});
};
changeDirectionAboutmeButton(aboutme);
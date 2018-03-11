'use strict';

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
changeDirectionAboutmeButton(aboutme);

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
changeDirectionStudiesArrowIndicator(studies);
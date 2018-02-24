'use strict';

var changeDirectionAboutmeButton = function changeDirectionAboutmeButton(element) {
	var textHidden = element.querySelector('p:last-of-type'),
	    button = element.querySelector('.aboutme-button');
	button.addEventListener('click', function (e) {
		textHidden.classList.toggle('active');
		button.classList.toggle('icon-arrow-down');
		button.classList.toggle('icon-arrow-up');
	});
};
changeDirectionAboutmeButton(aboutme);

var changeDirectionStudiesArrowIndicator = function changeDirectionStudiesArrowIndicator(element) {
	element.addEventListener('click', function (e) {
		var target = e.target;
		// console.log(target);
		if (target.classList.contains('studies-details_title')) {
			// console.dir(target)
			target.nextSibling.classList.toggle('active');
			target.previousSibling.classList.toggle('icon-arrow-right');
			target.previousSibling.classList.toggle('icon-arrow-down');
		}
	});
};
changeDirectionStudiesArrowIndicator(studies);
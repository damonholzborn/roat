


window.onload = function() {
	if (location.href.indexOf('localhost') !== -1) {
		var liveScript = document.createElement('script');
		liveScript.src = 'https://livejs.com/live.js';
		document.head.appendChild(liveScript);
	}

	const eHeaderArea = document.getElementById('header');
	const eMenuButton = document.getElementById('menu_button');
	const eRowOne = document.getElementById('row_one');
	const eRowFour = document.getElementById('row_four');
	const eRowFive = document.getElementById('row_five');
	const eRowSix = document.getElementById('row_six');
	const eRowSeven = document.getElementById('row_seven');

	console.log(eRowFive.offsetHeight);
	if (eRowFive.offsetHeight > 40) {
		eRowFive.classList.add('wrapped');
	}

	if (eRowSix.offsetHeight > 40) {
		eRowSix.classList.add('wrapped');
	}

	if (eRowSeven.offsetHeight > 40) {
		eRowSeven.classList.add('wrapped');
	}

	if (localStorage.rowOneOpen === 'true' || localStorage.rowOneOpen === undefined) {
		document.getElementById('row_one_info').classList.add('open');
		document.getElementById('triangle_one').classList.add('open');
	}
	if (localStorage.rowFourOpen === 'true' || localStorage.rowFourOpen === undefined) {
		document.getElementById('row_four_info').classList.add('open');
		document.getElementById('triangle_four').classList.add('open');
	}
	if (localStorage.rowSixOpen === 'true' || localStorage.rowSixOpen === undefined) {
		document.getElementById('row_six_info').classList.add('open');
		document.getElementById('triangle_six').classList.add('open');
	}
	if (localStorage.rowSevenOpen === 'true' || localStorage.rowSevenOpen === undefined) {
		document.getElementById('row_seven_info').classList.add('open');
		document.getElementById('triangle_seven').classList.add('open');
	}

	eMenuButton.onclick = function () {
		if (!eMenuButton.classList.contains('open')) {
				eMenuButton.classList.add('open');
				eHeaderArea.style.height = (document.getElementById('welcome_message').clientHeight + 130) + 'px';
		}
		else {
				eMenuButton.classList.remove('open');
				eHeaderArea.style.height = 'var(--headerheight)';
		}
	};

	eRowOne.onclick = function () {
		toggleInfo(document.getElementById('row_one_info'), document.getElementById('triangle_one'), 'rowOne');
	}
	eRowFour.onclick = function () {
		toggleInfo(document.getElementById('row_four_info'), document.getElementById('triangle_four'), 'rowFour');
	}
	eRowSix.onclick = function () {
		toggleInfo(document.getElementById('row_six_info'), document.getElementById('triangle_six'), 'rowSix');
	}
	eRowSeven.onclick = function () {
		toggleInfo(document.getElementById('row_seven_info'), document.getElementById('triangle_seven'), 'rowSeven');
	}

	function toggleInfo(rowelement, triangleelement, rowname) {
		if (rowelement.classList.contains('open')) {
			rowelement.classList.remove('open');
			triangleelement.classList.remove('open');
			localStorage.setItem(rowname + 'Open', false);
		}
		else {
			rowelement.classList.add('open');
			triangleelement.classList.add('open');
			localStorage.setItem(rowname + 'Open', true);
		}
	}

	if (!localStorage.savedState) {
		setTimeout(function() {
				eMenuButton.click();
				localStorage.setItem('savedState', true);
		}, 600);
	}
}


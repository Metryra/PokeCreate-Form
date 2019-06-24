/*
	common
*/

// external links
	let externalLinks = document.querySelectorAll('a[target="_blank"]');
	externalLinks.forEach(elem => {
		elem['rel'] = 'noopener noreferrer';
	});

// notifications
	function notify(body) {
		var notification = new Notification('PokéCreate Form', {
			body: body,
			icon: '../img/pokemon-create-logo.png'
		})
		setTimeout(notification.close.bind(notification), 4000);
	}

// optional and required inputs
	let optionalInput = document.querySelectorAll('input[optional], textarea[optional]');
	optionalInput.forEach(elem => {
		elem['placeholder'] = 'Optional';
		elem.classList.add('optional-input');
	});

// #i_gts-message options
	document.querySelector('#i_gts-message').childNodes.forEach((elem) => {
		elem.innerHTML = elem.value;
	});

// fill empty inputs on start
	// inputs dependent upon Pokémon
	let dependentSelects = document.querySelectorAll('#i_ability, #i_gender, .i_moves');
	dependentSelects.forEach(elem => {
		elem.insertAdjacentHTML('afterbegin',
			'<option value="" selected default disabled>Select your Pokémon first...</option>'
		)
	});
	// inputs independent of Pokémon
	let independentSelects = document.querySelectorAll(
		'#i_met-game, #i_met-location, #i_ot-gender, #i_gts-species, #i_gts-gender, #i_gts-ball, #i_gts-message'
	);
	independentSelects.forEach(elem => {
		elem.insertAdjacentHTML('afterbegin',
			'<option value="" selected default disabled>Please select...</option>'
		)
	});

// .hyper-training enable/disable based on level
	let i_lv = document.querySelector('#i_lv');
	let hyperTrainingInputs = document.querySelectorAll('[id^="i_hyp-"]');
	i_lv.addEventListener('change', () => {
		if (i_lv.value >= 100)
			hyperTrainingInputs.forEach(elem => { elem.removeAttribute('disabled'); });
		else
			hyperTrainingInputs.forEach(elem => { elem.setAttribute('disabled', ''); });
	});

// check EVs
	let allEvs = document.querySelectorAll('[id^="i_ev-"]');
	let ev_total = document.querySelector('#ev_total');
	let ev_rem = document.querySelector('#ev_rem');
	let totalEvsNum, remainingEvs;
	let EVsAreValid = true;
	function totalEvs(params) {
		totalEvsNum = 0;
		allEvs.forEach(elem => { totalEvsNum += parseInt(elem.value); });
		ev_total.innerHTML = totalEvsNum;
		if (totalEvsNum > 510 || totalEvsNum < 0 || isNaN(totalEvsNum)) {
			ev_total.classList.add('over-limit');
			EVsAreValid = false;
		} else {
			ev_total.classList.remove('over-limit');
			EVsAreValid = true;
		}

		remainingEvs = 510 - totalEvsNum;
		ev_rem.innerHTML = remainingEvs;
		if (remainingEvs < 0 ||  remainingEvs > 510 || isNaN(remainingEvs)) {
			ev_rem.classList.add('over-limit');
			EVsAreValid = false;
		} else {
			ev_rem.classList.remove('over-limit');
			EVsAreValid = true;
		}
	}; totalEvs();
	allEvs.forEach(elem => {
		elem.addEventListener('change', totalEvs);
	});

// SlimSelect
	new SlimSelect({ select: '#i_ball' });
	new SlimSelect({ select: '#i_met-game' });
	new SlimSelect({ select: '#i_gts-ball' });
	new SlimSelect({ select: '#i_species' });
	new SlimSelect({ select: '#i_ability' });
	let i_moves = document.querySelectorAll('.i_moves');
		i_moves.forEach(i_move => {
			new SlimSelect({ select: '#' + i_move.id });
		});
	new SlimSelect({ select: '#i_item' });
	new SlimSelect({ select: '#i_met-location' });

// .Inputs form
	let inputsForm = document.querySelector('#inputsForm');
	inputsForm.reset(); // default to [selected] for Firefox

/*
	styles & animations
*/

// .Inputs h2 dropshadow
	let InputsTitle = document.querySelector('.Inputs h2');
	let firstInputGroup = document.querySelectorAll('.InputGroup h3')[0];
	let observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (!entry.isIntersecting) {
				InputsTitle.classList.add('has-dropshadow');
			} else {
				InputsTitle.classList.remove('has-dropshadow');
			}
		});
	});
	observer.observe(firstInputGroup, {
		root: document.querySelector('.Inputs')
	});

// preview
	let p_species = document.querySelector('#p_species');
		p_species.addEventListener('mouseenter', () => {
			p_species.classList.add('hovered');
			setTimeout(() => { p_species.classList.remove('hovered'); }, 600);
		});

// pokeball
	let InputGroupH3 = document.querySelectorAll('.InputGroup h3');
		InputGroupH3.forEach(elem => {
			elem.insertAdjacentHTML('beforeend', '<span class="pokeball"></span>')
		});
	let pokeballAnim = document.querySelectorAll('.InputGroup h3 .pokeball');
		pokeballAnim.forEach(elem => {
			elem.addEventListener('mouseenter', e => {
				e.target.classList.add('hovered');
				setTimeout(() => { e.target.classList.remove('hovered'); }, 400);
			});

			elem.addEventListener('click', e => {
				e.target.classList.add('clicked');
				setTimeout(() => { e.target.classList.remove('clicked'); }, 600);
			});
		});
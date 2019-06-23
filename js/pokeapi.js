/*
	PokéAPI
*/

let pokeAPI = 'https://pokeapi.co/api/v2/';

// #i_species
	let i_species = document.querySelector('#i_species');
	fetch(pokeAPI + 'pokemon-species?offset=0&limit=807')
		.then(json => json.json())
		.then(results => {
			results.results.forEach(result => {
				i_species.insertAdjacentHTML('beforeend',
					`<option value="${ result.name }">${ result.name.toUpperCase() }</option>`
				);
			});
			i_species.insertAdjacentHTML('afterbegin',
				'<option selected default disabled>Pokémon</option>'
			);
		});

// #i_ability, #i_gender, .i_moves
	let i_ability = document.querySelector('#i_ability');
	let i_gender = document.querySelector('#i_gender');
	// let i_moves = document.querySelectorAll('.i_moves'); --> previously declared

	i_species.addEventListener('change', () => {
		// reset on #i_species change
		i_ability.innerHTML = '';
		i_gender.innerHTML = '';
		i_moves.forEach(i_move => { i_move.innerHTML = ''; });

		// fetch data for ability & moveset
		fetch(pokeAPI + `pokemon/${ i_species.value }`)
			.then(json => json.json())
			.then(results => {
				// abilities
				results.abilities.forEach(ability => {
					i_ability.insertAdjacentHTML('beforeend',
						`<option value="${ ability.ability.name }">${ ability.ability.name.toUpperCase() }</option>`
					)
				});

				// moves
				i_moves.forEach(i_move => {
					results.moves.forEach(move => {
						i_move.insertAdjacentHTML('beforeend',
							`<option value="${ move.move.name }">${ move.move.name.toUpperCase() }</option>`
						)
					});
				});
			});
		// fetch data for gender
		fetch(pokeAPI + `gender/male`)
			.then(json => json.json())
			.then(results => {
				for (i in results.pokemon_species_details) {
					if (i_species.value == results.pokemon_species_details[i].pokemon_species.name) {
						i_gender.insertAdjacentHTML('beforeend', '<option value=" (M)">♂ Male</option>');
					}
				}
			});
		fetch(pokeAPI + `gender/female`)
			.then(json => json.json())
			.then(results => {
				for (i in results.pokemon_species_details) {
					if (i_species.value == results.pokemon_species_details[i].pokemon_species.name) {
						i_gender.insertAdjacentHTML('beforeend', '<option value=" (F)">♀ Female</option>');
					}
				}
			});
		fetch(pokeAPI + `gender/genderless`)
			.then(json => json.json())
			.then(results => {
				for (i in results.pokemon_species_details) {
					if (i_species.value == results.pokemon_species_details[i].pokemon_species.name) {
						i_gender.insertAdjacentHTML('beforeend', '<option value="">Genderless</option>');
					}
				}
			});
	});

// #i_nature
	let i_nature = document.querySelector('#i_nature');

	let i_natureInc = document.querySelector('#i_nature-inc');
	let i_natureDec = document.querySelector('#i_nature-dec');
	let i_natureStat = document.querySelectorAll('#i_nature-inc, #i_nature-dec');

	// choose from nature name
	i_nature.addEventListener('change', () => {
		fetch(pokeAPI + `nature/${ i_nature.value }`)
			.then(json => json.json())
			.then(results => {
				if (
					results.increased_stat == null ||
					i_nature.value == 'hardy' ||
					i_nature.value == 'docile' ||
					i_nature.value == 'serious' ||
					i_nature.value == 'bashful' ||
					i_nature.value == 'quirky'
				) {
					i_natureInc.value = 'null';
					i_natureDec.value = 'null';
				} else {
					i_natureInc.value = results.increased_stat.name;
					i_natureDec.value = results.decreased_stat.name;
				}
			});
	});

	// choose from nature stat inc/dec
	i_natureStat.forEach(elem => {
		elem.addEventListener('change', () => {
			document.querySelectorAll('#i_nature option').forEach(elem => {
				fetch(pokeAPI + `nature/${ elem.value }`)
					.then(json => json.json())
					.then(results => {
						if (
							results.increased_stat !== null &&
							i_natureInc.value == results.increased_stat.name &&
							i_natureDec.value == results.decreased_stat.name
						) i_nature.value = results.name;
						else if (
							i_natureInc.value == 'null' ||
							i_natureDec.value == 'null' ||
							i_natureInc.value == i_natureDec.value
						) i_nature.value = 'hardy';
					});
			});
		});

		i_natureInc.addEventListener('change', inc => { if (inc.target.value == 'null') i_natureDec.value = 'null'; });
		i_natureDec.addEventListener('change', dec => { if (dec.target.value == 'null') i_natureInc.value = 'null'; })
	});

// #i_item
	let i_item = document.querySelector('#i_item');
	fetch(pokeAPI + 'item?offset=0&limit=954')
		.then(json => json.json())
		.then(results => {
			results.results.forEach(result => {
				i_item.insertAdjacentHTML('beforeend',
					`<option value="${ result.name }">${ result.name.toUpperCase() }</option>`
				)
			});
		});

// #i_met-location
	let i_metLocation = document.querySelector('#i_met-location');
	fetch(pokeAPI + 'location?offset=0&limit=781')
		.then(json => json.json())
		.then(results => {
			results.results.forEach(result => {
				i_metLocation.insertAdjacentHTML('beforeend',
					`<option value="${ result.name }">${ result.name.toUpperCase() }</option>`
				)
			});
		});
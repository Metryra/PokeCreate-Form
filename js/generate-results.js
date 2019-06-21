let inputs = {
	general: {
		game: document.getElementById('i_game'),
		qr: document.getElementById('i_qr')
	},
	pokemon: {
		species: document.getElementById('i_species'),
		ability: document.getElementById('i_ability'),
		nickname: document.getElementById('i_nickname'),
		gender: document.getElementById('i_gender'),
		shiny: document.getElementById('i_shiny'),
		pokerus: document.getElementById('i_pokerus'),
		lv: document.getElementById('i_lv'),
		nature: document.getElementById('i_nature'),
		natureInc: document.getElementById('i_nature-inc'),
		natureDec: document.getElementById('i_nature-dec'),
		ball: document.getElementById('i_ball'),
		item: document.getElementById('i_item'),
		iv: {
			H: document.getElementById('i_iv-H'),
			A: document.getElementById('i_iv-A'),
			B: document.getElementById('i_iv-B'),
			C: document.getElementById('i_iv-C'),
			D: document.getElementById('i_iv-D'),
			S: document.getElementById('i_iv-S')
		},
		ev: {
			H: document.getElementById('i_ev-H'),
			A: document.getElementById('i_ev-A'),
			B: document.getElementById('i_ev-B'),
			C: document.getElementById('i_ev-C'),
			D: document.getElementById('i_ev-D'),
			S: document.getElementById('i_ev-S')
		},
		hyp: {
			H: document.getElementById('i_hyp-H'),
			A: document.getElementById('i_hyp-A'),
			B: document.getElementById('i_hyp-B'),
			C: document.getElementById('i_hyp-C'),
			D: document.getElementById('i_hyp-D'),
			S: document.getElementById('i_hyp-S')
		},
		moveSet: [
			document.getElementById('i_move1'),
			document.getElementById('i_move2'),
			document.getElementById('i_move3'),
			document.getElementById('i_move4')
		],
		maxpp: document.getElementById('i_maxpp'),
		language: document.getElementById('i_language'),
		notes: document.getElementById('i_notes')
	},
	met: {
		game: document.getElementById('i_met-game'),
		location: document.getElementById('i_met-location'),
		lv: document.getElementById('i_met-lv')
	},
	trainer: {
		ot: document.getElementById('i_ot'),
		gender: document.getElementById('i_ot-gender'),
		nsid: document.getElementById('i_nsid'),
		pid: document.getElementById('i_pid')
	},
	gts: {
		ign: document.getElementById('i_ign'),
		fc: document.getElementById('i_fc'),
		pokemon: {
			species: document.getElementById('i_gts-pokemon'),
			gender: document.getElementById('i_gts-gender'),
			lv: document.getElementById('i_gts-lv'),
			ball: document.getElementById('i_gts-ball')
		},
		message: document.getElementById('i_gts-message')
	}
};

inputs.gts['message'].childNodes.forEach((elem) => {
	elem.innerHTML = elem.value;
});
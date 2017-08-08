$(function() {
	$('input[type=text]').keyup(write);
	$('input[type=number], input[type=checkbox], select').change(write);

	/* Special */
		$('.special.optional').after( '<sup>*</sup>' );
		$('.special.event-only').after( '<sup>**</sup>' );

	/* Pokémon */
		var pkmn = [];
		$.getJSON('https://nuotsu.github.io/PPAR/js/ppa.json', function(ppaJSON) {
            for (var i in ppaJSON) {
				pkmn.push(ppaJSON[i].nameENG);
            }
			$('#name').autocomplete({
				source: pkmn
			});
		});

	function write() {
		// Terms
			game_ver = $('#game_ver').val();
			pkhex = '';
				if ( $('#pkhex').val() != '' ) {
					pkhex = $('#pkhex').val();
				} else {
					pkhex = 'N/A';
				}
			serebii = '';
				if ( $('#serebii').val() != '' ) {
					serebii = $('#serebii').val();
				} else {
					serebii = 'N/A';
				}
			name = $('#name').val();
			nickname = $('#nickname').val();
			nn = $('#nn').val();
			form = '';
				if ( $('#form').val() != '' ) {
					form = $('#form').val();
				} else {
					form = 'N/A';
				}
			gender = $('#gender').val();
			shiny = '';
				if ( $('#shiny').prop('checked') ) {
					shiny = 'Yes';
				} else {
					shiny = 'No';
				}
			level = $('#level').val();
			nature = $('#nature').val();
			item = $('#item').val();
			ability = $('#ability').val();
			lang = $('#lang').val();
			pkrs = '';
				if ( $('#pkrs').prop('checked') ) {
					pkrs = 'Yes';
				} else {
					pkrs = 'No';
				}
			mtg_game = $('#mtg_game').val();
			mtg_loc = $('#mtg_loc').val();
			mtg_level = $('#mtg_level').val();
			ball = $('#ball').val();
			ribbons = '';
				if ( $('#ribbons').val() != '' ) {
					ribbons = $('#ribbons').val();
				} else {
					ribbons = 'None';
				}
			ivs = $('#ivs').val();
			evs = $('#evs').val();
			hp = $('#hp').val();
			move_1 = $('#move_1').val();
			move_2 = $('#move_2').val();
			move_3 = $('#move_3').val();
			move_4 = $('#move_4').val();
			ot_name = $('#ot_name').val();
			ot_gender = $('#ot_gender').val();
			id = $('#id').val();
			tid = '';
				if ( $('#tid').val() != '' ) {
					tid = $('#tid').val();
				} else {
					tid = 'N/A';
				}
			sid = '';
				if ( $('#sid').val() != '' ) {
					sid = $('#sid').val();
				} else {
					sid = 'N/A';
				}
			ign = $('#ign').val();
			fc = $('#fc').val();
			gts_pkmn = $('#gts_pkmn').val();
			gts_gender = $('#gts_gender').val();
			gts_level = $('#gts_level').val();
			gts_ball = $('#gts_ball').val();
			msg = $('#msg').val();
		// Form
			$('textarea').val(
				'[PokeRequest]' + '\n\n' +
				'#Pokémon Request' + '\n\n' +
				'* **Game Version**: ' + game_ver + '\n' +
				'* **PKHeX File Link**: ' + pkhex + '\n' +
				'* **Serebii Link**: ' + serebii + '\n\n' +
				'&nbsp;' + '\n\n' +
				'##Pokémon Info ' + '\n\n' +
				'* **Pokémon**: ' + name + '\n' +
				'* **Nickname**: ' + nickname + '\n' +
				'* **Form**: ' + form + '\n' +
				'* **Gender**: ' + gender + '\n' +
				'* **Shiny**: ' + shiny + '\n\n' +
				'&nbsp;' + '\n\n' +
				'* **Level**: ' + level + '\n' +
				'* **Nature**: ' + nature + '\n' +
				'* **Held Item**: ' + item + '\n' +
				'* **Ability**: ' + ability + '\n' +
				'* **Language**: ' + lang + '\n' +
				'* **Pokérus**: ' + pkrs + '\n\n' +
				'&nbsp;' + '\n\n' +
				'* **Meeting Location**: ' + mtg_game + ' ¦ ' + mtg_loc + ' ¦ Lv.' + mtg_level +
				'* **PokéBall**: ' + ball + ' ball\n' +
				'* **Ribbons**: ' + ribbons + '\n\n' +
				'&nbsp;' + '\n\n' +
				'* **IV\'s**: ' + ivs + '\n' +
				'* **EV\'s**: ' + evs + '\n' +
				'* **Hidden Power**: ' + hp + '\n\n' +
				'&nbsp;' + '\n\n' +
				'* **Move 1**: ' + move_1 + '\n' +
				'* **Move 2**: ' + move_2 + '\n' +
				'* **Move 3**: ' + move_3 + '\n' +
				'* **Move 4**: ' + move_4 + '\n\n' +
				'&nbsp;' + '\n\n' +
				'##Trainer Info' + '\n\n' +
				'* **OT**: ' + ot_name + ' ¦ ' + ot_gender + '\n' +
				'* **Gen 7 ID**: ' + id + '\n' +
				'* **TID**: ' + tid + '\n' +
				'* **SID**: ' + sid + '\n' +
				'&nbsp;' + '\n\n' +
				'##GTS Deposit' + '\n\n' +
				'>* **IGN**: ' + ign + '\n' +
				'>* **FC**: ' + fc + '\n' +
				'>* **Pokemon**: ' + gts_pkmn + ' ¦ ' + gts_gender + ' ¦ Lv.' + gts_level + ' ¦ ' + gts_ball + ' Ball\n' +
				'>* **Message**: "' + msg + '"'
			);
	}

	$('#copy').click(function() {
		$('.result #form').select();
		document.execCommand('copy');
	});
});

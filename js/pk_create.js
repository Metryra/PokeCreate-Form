// hover for PPAR
	$('.ppar').hover(function() {
		$('.bg').addClass('show')
	}, function() {
		$('.bg').removeClass('show')
	})

// Upon change of inputs
	$('input[type=text]').keyup(write)
	$('input[type=number], input[type=checkbox], select').change(write)

// Special
	$('.special.optional').after('<sup>*</sup>')
	$('.special.event-only').after('<sup>**</sup>')

// Meeting Date: Today
	now = new Date()
	    yyyy = now.getFullYear()
	    mm = now.getMonth()+1
	        if (mm < 10) mm = `0${mm}`
	    d = now.getDate()
	    dd = ''
	        if (d < 10) dd = `0${dd}`
	timestamp = `${mm}/${d}/${yyyy}`
	$('#mtg_date').val(timestamp)

// Pokémon
	var pkmnList = []
	var ppaList = []
	$.getJSON('https://nuotsu.github.io/PPAR/js/ppa.json', function(ppaJSON) {
        for (var i in ppaJSON) {
			pkmnList.push(ppaJSON[i].nameENG);
			ppaList.push(ppaJSON[i].dex);
        }
		return pkmnList
	})
	$("#pkmn, #gts_pkmn").autocomplete({
	  source: pkmnList
	})

function write() {
	// Terms for PokémonCreate
		game_ver = $('#game_ver').val()
		pkhex = ''
			if ( $('#pkhex').val() != '' ) pkhex = $('#pkhex').val()
			else pkhex = 'N/A'
		serebii = '';
			if ( $('#serebii').val() != '' ) serebii = $('#serebii').val()
			else serebii = 'N/A'
		pkmn = $('#pkmn').val();
			var ppa = ppaList[pkmnList.indexOf(pkmn)]
			if (ppa == undefined ||
				ppa == '0025Co') ppa = 'Egg'
			$('label[for=pkmn] img').attr({
				'src': 'https://nuotsu.github.io/PPAR/img/ppa/' + ppa + '_PPA.png'
			})
		nickname = $('#nickname').val()
		nn = $('#nn').val()
		form = ''
			if ( $('#form').val() != '' ) form = $('#form').val()
			else form = 'N/A'
			// Forms
				if (pkmn.indexOf('Alolan') == 0) {
					$('#form').val('Alolan')
					form = 'Alolan'
				} else if (pkmn.indexOf('Pikachu ') == 0) {
					$('#form').val($('#pkmn').val().replace('Pikachu ', ''))
					form = $('#pkmn').val().replace('Pikachu ', '')
				} else if (pkmn.indexOf('Unown') == 0) {
					$('#form').val($('#pkmn').val().replace('Unown ', ''))
					form = $('#pkmn').val().replace('Unown ', '')
				} else if (pkmn.indexOf('Deoxys') == 0) {
					$('#form').val($('#pkmn').val().replace('Deoxys ', ''))
					form = $('#pkmn').val().replace('Deoxys ', '')
				} else if (pkmn.indexOf('Deerling') == 0) {
					$('#form').val($('#pkmn').val().replace('Deerling ', ''))
					form = $('#pkmn').val().replace('Deerling ', '')
				} else if (pkmn.indexOf('Sawsbuck') == 0) {
					$('#form').val($('#pkmn').val().replace('Sawsbuck ', ''))
					form = $('#pkmn').val().replace('Sawsbuck ', '')
				} else if (pkmn.indexOf('Tornadus') == 0) {
					$('#form').val($('#pkmn').val().replace('Tornadus ', ''))
					form = $('#pkmn').val().replace('Tornadus ', '')
				} else if (pkmn.indexOf('Thundurus') == 0) {
					$('#form').val($('#pkmn').val().replace('Thundurus ', ''))
					form = $('#pkmn').val().replace('Thundurus ', '')
				} else if (pkmn.indexOf('Landorus') == 0) {
					$('#form').val($('#pkmn').val().replace('Landorus ', ''))
					form = $('#pkmn').val().replace('Landorus ', '')
				} else if (pkmn.indexOf('Kyurem ') == 0) {
					$('#form').val($('#pkmn').val().replace('Kyurem ', ''))
					form = $('#pkmn').val().replace('Kyurem ', '')
				} else if (pkmn.indexOf('Vivillon ') == 0) {
					$('#form').val($('#pkmn').val().replace('Vivillon ', ''))
					form = $('#pkmn').val().replace('Vivillon ', '')
				} else if (pkmn.indexOf('Flabebe') == 0) {
					$('#form').val($('#pkmn').val().replace('Flabebe ', ''))
					form = $('#pkmn').val().replace('Flabebe ', '')
				} else if (pkmn.indexOf('Floette') == 0) {
					$('#form').val($('#pkmn').val().replace('Floette ', ''))
					form = $('#pkmn').val().replace('Floette ', '')
				} else if (pkmn.indexOf('Florges') == 0) {
					$('#form').val($('#pkmn').val().replace('Florges ', ''))
					form = $('#pkmn').val().replace('Florges ', '')
				} else if (pkmn.indexOf('Furfrou ') == 0) {
					$('#form').val($('#pkmn').val().replace('Furfrou ', ''))
					form = $('#pkmn').val().replace('Furfrou ', '')
				} else if (pkmn.indexOf('Zygarde') == 0) {
					$('#form').val($('#pkmn').val().replace('Zygarde ', ''))
					form = $('#pkmn').val().replace('Zygarde ', '')
				} else if (pkmn.indexOf('Hoopa') == 0) {
					$('#form').val($('#pkmn').val().replace('Hoopa ', ''))
					form = $('#pkmn').val().replace('Hoopa ', '')
				} else if (pkmn.indexOf('Lycanroc') == 0) {
					$('#form').val($('#pkmn').val().replace('Lycanroc ', ''))
					form = $('#pkmn').val().replace('Lycanroc ', '')
				} else if (pkmn.indexOf('Minior') == 0) {
					$('#form').val($('#pkmn').val().replace('Minior ', ''))
					form = $('#pkmn').val().replace('Minior ', '')
				}
		gender = $('#gender').val()
			if (pkmn.match(
					/( Nidoran (F)|Nidorina|Nidoqueen|Chansey|Kangaskhan|Jynx|Smoochum|Miltank|Blissey|Illumise|Latias|Wormadam|Vespiqueen|Happiny|Froslass|Cresselia|Unfezant (F)|Petilil|Lilligant|Vullaby|Mandibuzz|Flabebe|Floette|Florges|Meowstic (F)|Salazzle|Bounsweet|Steenee|Tsareena)/
				)) $('#gender').val('F')
			else if (pkmn.match(
					/( Nidoran (M)|Nidorino|Nidoking|Hitmonlee|Hitmonchan|Tauros|Tyrogue|Hitmontop|Volbeat|Latios|Mothim|Gallade|Unfezant (M)|Throh|Sawk|Rufflet|Braviary|Tornadus|Thundurus|Landorus|Meowstic (M))/
				)) $('#gender').val('M')
			else if (pkmn.match(
					/(Magnemite|Magneton|Voltorb|Electrode|Staryu|Starmie|Ditto|Porygon|Articuno|Zapdos|Moltres|Mewtwo|Mew|Unown|Porygon2|Raikou|Entei|Suicune|Lugia|Ho-oh|Celebi|Shedinja|Lunatone|Solrock|Baltoy|Claydol|Beldum|Metang|Metagross|Regirock|Regice|Registeel|Kyogre|Groudon|Rayquaza|Jirachi|Deoxys|Bronzor|Bronzong|Magnezone|Porygon-Z|Rotom|Uxie|Mesprit|Azelf|Dialga|Palkia|Regigigas|Giratina|Phione|Manaphy|Darkrai|Shaymin|Arceus|Victini|Klink|Klang|Klinklang|Cyrogonal|Golett|Golurk|Cobalion|Terrakion|Virizion|Reshiram|Zekrom|Kyurem|Keldeo|Meloetta|Genesect|Carbink|Xerneas|Yveltal|Zygarde|Diancie|Hoopa|Volcanion|Type: Null|Silvally|Minior|Dhelmise|Tapu Koko|Tapu Bulu|Tapu Lele|Tapu Fini|Cosmog|Cosmoem|Solgaleo|Lunala|Nihilego|Buzzwole|Pheromosa|Xurkitree|Celesteela|Kartana|Guzzlord|Necrozma|Magearna|Marshadow)/
				)) $('#gender').val('Genderless')
		shiny = ''
			if ( $('#shiny').prop('checked') ) shiny = 'Yes'
			else shiny = 'No'
		level = $('#level').val()
		nature = $('#nature').val()
		item = $('#item').val()
		ability = $('#ability').val()
		lang = $('#lang').val()
		pkrs = $('#pkrs').val()
		mtg_game = $('#mtg_game').val()
		mtg_loc = $('#mtg_loc').val()
		mtg_date = $('#mtg_date').val()
		mtg_level = $('#mtg_level').val()
		ball = $('#ball').val()
			$('label[for=ball] img').attr({
				'src': 'https://nuotsu.github.io/PPAR/img/ball/' + ball + '_ball.png'
			})
		ribbons = ''
			if ( $('#ribbons').val() != '' ) ribbons = $('#ribbons').val()
			else ribbons = 'None'
		ivs = $('#ivs').val()
		evs = $('#evs').val()
		hp = $('#hp').val()
		move_1 = $('#move_1').val()
		move_2 = $('#move_2').val()
		move_3 = $('#move_3').val()
		move_4 = $('#move_4').val()
		ot_name = $('#ot_name').val()
		ot_gender = $('#ot_gender').val()
		id = $('#id').val()
		tid = ''
			if ( $('#tid').val() != '' ) tid = $('#tid').val()
			else tid = 'N/A'
		sid = ''
			if ( $('#sid').val() != '' ) sid = $('#sid').val()
			else sid = 'N/A'
		ign = $('#ign').val()
		fc = $('#fc').val()
		gts_pkmn = $('#gts_pkmn').val()
			var gts_ppa = ppaList[pkmnList.indexOf(gts_pkmn)]
			if (gts_ppa == undefined ||
				gts_ppa == '0129s') gts_ppa = 'Egg'
			$('label[for=gts_pkmn] img').attr({
				'src': 'https://nuotsu.github.io/PPAR/img/ppa/' + gts_ppa + '_PPA.png'
			})
		gts_gender = $('#gts_gender').val()
		gts_level = $('#gts_level').val()
		gts_ball = $('#gts_ball').val()
			$('label[for=gts_ball] img').attr({
				'src': 'https://nuotsu.github.io/PPAR/img/ball/' + gts_ball + '_ball.png'
			})
		msg = $('#msg').val()
	// Form for PokémonCreate
		$('.result.pk_create textarea').val(
			'[PokeRequest]' + '\n\n' +
			'#Pokémon Request' + '\n\n' +
			'* **Game Version**: ' + game_ver + '\n' +
			'* **PKHeX File Link**: ' + pkhex + '\n' +
			'* **Serebii Link**: ' + serebii + '\n\n' +
			'&nbsp;' + '\n\n' +
			'##Pokémon Info ' + '\n\n' +
			'* **Pokémon**: ' + pkmn + '\n' +
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
			'* **Meeting Info**: ' + mtg_game + ' ¦ ' + mtg_loc + ' ¦ ' + mtg_date + ' ¦ Lv.' + mtg_level + '\n' +
			'* **PokéBall**: ' + ball + ' Ball\n' +
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
		)
}

$('#copy').click(function() {
	$('.result textarea').select()
	document.execCommand('copy')
})

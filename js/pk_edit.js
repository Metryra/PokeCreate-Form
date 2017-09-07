// hover for PPAR
	$('.ppar').hover(function() {
		$('.bg').css({
			'background-image': 'url(\'images/ppar_show.png\')'
		})
	}, function() {
		$('.bg').css({
			'background-image': 'url(\'images/ppar.png\')'
		})
	})

// Upon change of inputs
	$('input[type=text]').keyup(write)
	$('input[type=number], input[type=checkbox], select').change(write)

// Special
	$('.special.optional').after('<sup>*</sup>')
	$('.special.event-only').after('<sup>**</sup>')

// Pokémon
	var pkmnList = []
	var ppaList = []
	$.getJSON('../PPAR/js/ppa.json', function(ppaJSON) {
        for (var i in ppaJSON) {
			pkmnList.push(ppaJSON[i].nameENG)
			ppaList.push(ppaJSON[i].dex)
        }
		return pkmnList
	});
	$("#pkmn, #gts_pkmn").autocomplete({
	  source: pkmnList
	})

function write() {
	// Terms for PokémonCreate
		edit_gender = $('#edit_gender').val()
        edit_nn = $('#edit_nn').val()
        edit_form = $('#edit_form').val()
        edit_lv = $('#edit_lv').val()
        edit_nat = $('#edit_nat').val()
        edit_item = $('#edit_item').val()
        edit_shiny = ''
			if ( $('#edit_shiny').prop('checked') ) edit_shiny = 'Yes'
			else edit_shiny = 'No'
        edit_pkrs = $('#edit_pkrs').val()
        edit_ability = $('#edit_ability').val()
        edit_ball = $('#edit_ball').val()
            $('label[for=edit_ball] img').attr({
                'src': 'images/ball/' + edit_ball + '_ball.png'
            })
        edit_lang = $('#edit_lang').val()
        edit_reg = $('#edit_reg').val()
        edit_mtg_game = $('#edit_mtg_game').val()
        edit_mtg_loc = $('#edit_mtg_loc').val()
        edit_mtg_level = $('#edit_mtg_level').val()
        edit_ivs = $('#edit_ivs').val()
        edit_evs = $('#edit_evs').val()
        edit_move_1 = ''
            if ( $('#edit_move_1').val() != '' ) edit_move_1 = $('#edit_move_1').val()
            else edit_move_1 = '--'
		edit_move_2 = ''
            if ( $('#edit_move_2').val() != '' ) edit_move_2 = $('#edit_move_2').val()
            else edit_move_2 = '--'
		edit_move_3 = ''
            if ( $('#edit_move_3').val() != '' ) edit_move_3 = $('#edit_move_3').val()
            else edit_move_3 = '--'
		edit_move_4 = ''
            if ( $('#edit_move_4').val() != '' ) edit_move_4 = $('#edit_move_4').val()
            else edit_move_4 = '--'
		edit_ot_name = $('#edit_ot_name').val()
		edit_ot_gender = $('#edit_ot_gender').val()
		edit_id = $('#edit_id').val()
		edit_tid = '';
			if ( $('#edit_tid').val() != '' ) tid = $('#edit_tid').val()
			else tid = '--'
		edit_sid = '';
			if ( $('#edit_sid').val() != '' ) sid = $('#edit_sid').val()
			else sid = '--'
        edit_trnr = $('#edit_trnr').val()
	// Form for PokémonEdit
		$('.result.pk_edit textarea').val(
			'Please state only what you want changed below.' + '\n\n' +
			'Gender:  ' + edit_gender + '\n\n' +
			'Nickname: ' + edit_nn + '\n\n' +
			'Form: ' + edit_form + '\n\n' +
			'Level: ' + edit_lv + '\n\n' +
			'Nature: ' + edit_nat + '\n\n' +
			'Item: ' + edit_item + '\n\n' +
			'Shiny: ' + edit_shiny + '\n\n' +
			'Pokerus: ' + edit_pkrs + '\n\n' +
			'Ability: ' + edit_ability + '\n\n' +
			'Ball: ' + edit_ball + ' Ball\n\n' +
			'Language and Region: ' + edit_lang + ' ¦ ' + edit_reg + '\n\n' +
			'Meeting Location: ' +
                edit_mtg_game + ' ¦ ' + edit_mtg_loc + ' ¦ Lv.' + edit_mtg_level + '\n\n' +
			'IVs: ' + edit_ivs + '\n\n' +
			'EVs: ' + edit_evs + '\n\n' +
			'Moves: ' +
                edit_move_1 + ' / ' + edit_move_2 + ' / ' +
                edit_move_3 + ' / ' + edit_move_4 + '\n\n' +
			'Trainer Information (OT, ID, etc.):\n\n' +
                'OT Name: ' + edit_ot_name + ' ¦ ' + edit_ot_gender + '\n\n' +
                'ID: ' + edit_id + ' ¦ TID: ' + edit_tid + ' ¦ SID: ' + edit_sid
		)
}

$('#copy').click(function() {
	$('.result textarea').select()
	document.execCommand('copy')
});

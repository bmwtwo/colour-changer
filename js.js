var NUM_HORIZ_DIVISIONS = 3;
var NUM_VERT_DIVISIONS = 2;
var DELAY_MS = 100;
var INCREMENT = 50;
var NUM_COLORS = 3;
var MAX = 255;
var MIN = 0;

function edit_color(obj, color_vector, index, is_increase) {
	if (is_increase) {
		color_vector[index] += INCREMENT;
		if (color_vector[index] >= MAX) {
			color_vector[index] = MAX;
			is_increase = false;
			index = (index+NUM_COLORS-1) % NUM_COLORS;
		}
	}
	else {
		color_vector[index] -= INCREMENT;
		if (color_vector[index] <= MIN) {
			color_vector[index] = MIN;
			is_increase = true;
			index = (index+2) % NUM_COLORS;
		}
	}
	obj.css('background-color', 'rgb(' + color_vector + ')');
	setTimeout(
		edit_color,
		DELAY_MS, 
		obj,
		color_vector,
		index,
		is_increase
	);
}

$(document).on('ready', function() {
	/*edit_color($('.red'), [255, 0, 0], 1, true);
	edit_color($('.blue'), [0, 0, 255], 1, true);*/
	for (var x = 0; x < 1/*NUM_HORIZ_DIVISIONS*/; x++) {
		var div = '<div class="third blue"></div>';
		$('body').append(div);
		edit_color($('body.' + div), [0, 0, 255], 1, true);
	}
});

var isIncrease = true;
var index = 1;
var color_vector = [255, 0, 0];
var DELAY_MS = 100;
var INCREMENT = 1;
var NUM_COLORS = 3;
var MAX = 255;
var MIN = 0;

function edit_color() {
	if (isIncrease) {
		color_vector[index] += INCREMENT;
		if (color_vector[index] >= MAX) {
			color_vector[index] = MAX;
			isIncrease = false;
			index = (index+NUM_COLORS-1) % NUM_COLORS;
		}
	}
	else {
		color_vector[index] -= INCREMENT;
		if (color_vector[index] <= MIN) {
			color_vector[index] = MIN;
			isIncrease = true;
			index = (index+2) % NUM_COLORS;
		}
	}
	$('body').css('background-color', 'rgb(' + color_vector + ')');
	setTimeout(edit_color, DELAY_MS);
}

$(document).on('ready', function() {
	edit_color();
});

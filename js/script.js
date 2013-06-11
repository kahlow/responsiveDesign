$(document).ready(function() {
	showWidth();
});

$(window).on('resize', showWidth);

function showWidth(){
	$('#width').html('Browser width: ' + $(window).width());
}
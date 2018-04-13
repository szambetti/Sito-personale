$(document).ready(function() {
	var option = 'bio';
	var url = window.location.href;
	option = url.match(/option=(.*)/)[1];
	showDiv(option);
});
function showDiv(option) {
	$('.testo').hide();
	$('#' + option).addClass("fadein-testo").show();
}

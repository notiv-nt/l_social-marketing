$(function() {
	$('#contactBtn').on('click', function() {
		$(this).children('i.fa').toggleClass('fa-angle-down');

		$('#form-show').slideToggle(200);
	})
});
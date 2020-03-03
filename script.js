var btn = $('.btn');

var menu = $('.menu');

$('.btn').click(function() {
	btn.toggleClass('close');
 		menu.toggleClass('active');	
})
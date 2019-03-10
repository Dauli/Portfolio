// registring service worker
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('sw.js')
	.then(console.log)
	.catch(console.error)
}


$(function(){
	// Slide show of the page
	$.fx.interval = 0;
	(function cycleBgImage(elem, bgimg){
		elem.css('backgroundImage', bgimg)
		.fadeTo(2000, 1, 'linear', function(){
			$(this).delay(2000, 'fx')
			.fadeTo(2000, 0, 'linear', function(){
				var img = $(this).css('backgroundImage').split(','),
				bgimg = img.concat(img[0]).splice(1).join(',');
				cycleBgImage(elem, bgimg);
			});
		});
	}($('#slides')));
});

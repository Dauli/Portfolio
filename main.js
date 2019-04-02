// registring service worker
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('sw.js')
	.then(r => console.log('SW Registered!'))
	.catch(console.error)
}

// jquery for canvas display
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


// gallery functionality
function myFunction(imgs) {
	// Get the expanded image
	var expandImg = document.getElementById("expandedImg");
	// Get the image text
	var imgText = document.getElementById("imgtext");
	// Use the same src in the expanded image as the image being clicked on from the grid
	expandImg.src = imgs.src;
	// Use the value of the alt attribute of the clickable image as text inside the expanded image
	imgText.innerHTML = imgs.alt;
	// Show the container element (hidden with CSS)
	expandImg.parentElement.style.display = "block";
}
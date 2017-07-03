// content.js
var video_id;
var pak = "https://www.youpak.com/watch?v=";
function afterNavigate() {
    if ('/watch' === window.location.pathname) {
	video_id = window.location.search.split('v=')[1]; 
	if(document.body.innerHTML.toString().indexOf('blocked it in your country') > -1){
		window.open("" + pak + video_id,"_self");
	}
	else if(document.body.innerHTML.toString().indexOf('The uploader has not made this video available in your country.') > -1){
		window.open("" + pak + video_id,"_self");
	}
    }
}

(document.body || document.documentElement).addEventListener('transitionend',
  function(/*TransitionEvent*/ event) {
    if (event.propertyName === 'width' && event.target.id === 'progress') {
        afterNavigate();
    }
}, true);
// After page load
afterNavigate();

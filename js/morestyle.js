
//  from https://blog.hubspot.com/website/bootstrap-navbar and https://codepen.io/albizan/pen/mMWdWZ

// $('.navTrigger').click(function () {
//     $(this).toggleClass('active');
//     console.log("Clicked menu");
//     $("#mainListDiv").toggleClass("show_list");
//     $("#mainListDiv").fadeIn();

// });

var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
    video.muted = true;
	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
    console.log("video/IMG_4804.MOV");

});

// find how to embed video controls directly on the video

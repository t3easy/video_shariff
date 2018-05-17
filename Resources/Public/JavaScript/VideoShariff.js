function replaceVideo(event) {
    console.log(event);
    event.target.parentElement.outerHTML = TYPO3.settings['video_shariff']['video'][event.target.parentElement.dataset.video];
}

var videos = document.getElementsByClassName('video-shariff-play'), i = 0;
for (i; i < videos.length; i++) {
    videos[i].onclick = function(event){event.preventDefault(); replaceVideo(event);};
}
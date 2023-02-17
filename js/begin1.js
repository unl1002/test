var bts = document.getElementsByClassName('warp');
var videos = document.getElementsByClassName('video-player');
var index = 0;
var bt1 = document.getElementById('warp1');
var bt2 = document.getElementById('warp2');

var clearAct = function () {
    for (var i = 0; i < bts.length; i++) {
        bts[i].className = 'warp';
    }
    for (var j = 0; j < videos.length; j++) {
        videos[j].className = 'video-player';
    }
}

var goIndex = function () {
    clearAct();
    bts[index].className = 'warp active';
    videos[index].className = 'video-player active';
}

bt1.addEventListener('click', function () {
    index = 0;
    goIndex();
})

bt2.addEventListener('click', function () {
    index = 1;
    goIndex();
})
var borders = document.getElementsByClassName('borders');
var texts = document.getElementsByClassName('pp');
var index = 0;
var bt1 = document.getElementById('bt1');
var bt2 = document.getElementById('bt2');

var clearActive = function () {
    for (var i = 0; i < texts.length; i++) {
        texts[i].className = 'pp hidden';
    }
    for (var j = 0; j < borders.length; j++) {
        borders[j].className = 'borders hidden';
    }
}

var goIndexs = function () {
    clearActive();
    borders[index].className = 'borders';
    texts[index].className = 'pp';
}

bt1.addEventListener('mouseenter', function () {
    index = 0;
    goIndexs();
})

bt1.addEventListener('mouseleave', function () {
    clearActive();
})


bt2.addEventListener('mouseenter', function () {
    index = 1;
    goIndexs();
})

bt2.addEventListener('mouseleave', function () {
    clearActive();
})
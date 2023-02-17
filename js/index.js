var items = document.getElementsByClassName('itemz');
var goPreBtn = document.getElementById('goPre');
var goNextBtn = document.getElementById('goNext');
var points = document.getElementsByClassName('point')

var index = 0;

var clearAct = function () {
    for (var i = 0; i < items.length; i++) {
        items[i].className = 'itemz';
    }
    for (var i = 0; i < points.length; i++) {
        points[i].className = 'point';
    }
}

var goIndex = function () {
    clearAct();
    points[index].className = 'point act';
    items[index].className = 'itemz act';
}

var goNext = function () {
    if (index < 3) {
        index++;
    } else {
        index = 0;
    }
    goIndex();
}

var goPre = function () {
    if (index == 0) {
        index = 3;
    } else {
        index--;
    }
    goIndex();
}

goNextBtn.addEventListener('click', function () {
    goNext();
})

goPreBtn.addEventListener('click', function () {
    goPre();
})

for (var i = 0; i < points.length; i++) {
    points[i].addEventListener('click', function () {
        var pointIndex = this.getAttribute('data-index');
        index = pointIndex;
        goIndex();
    })
}

setInterval(function () {
    goNext();
}, 1500);


var itemxs = document.getElementsByClassName('itemx');
var itemcs = document.getElementsByClassName('itemc');

var b_index = 0;
var clearb_Index = function () {
    for (var m = 0; m < itemxs.length; m++) {
        itemxs[m].className = 'itemx';
    }
    for (var n = 0; n < itemcs.length; n++) {
        itemcs[n].className = 'itemc';
    }
}

var goB_Index = function () {
    clearb_Index();
    itemxs[b_index].className = 'itemx act';
    itemcs[b_index].className = 'itemc act';
}

var goBNext = function () {
    if (b_index < 2) {
        b_index++;
    } else {
        b_index = 0;
    }
    goB_Index();
}

setInterval(function () {
    goBNext();
}, 2000);
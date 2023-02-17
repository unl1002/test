var bt = document.getElementsByClassName("bt");
var content = document.getElementsByClassName("typeBox");

for (var i = 0; i < bt.length; i++) {
    bt[i].index = i;
    bt[i].onclick = function () {
        for (var j = 0; j < bt.length; j++) {
            bt[j].className = bt[j].className.replace(' active', '').trim();
            content[j].className = content[j].className.replace(' hidden', '').trim();
        }
        this.className = this.className + ' active';
        content[this.index].className = content[this.index].className + ' hidden';
    };
}
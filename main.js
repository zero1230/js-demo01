let div1 = document.createElement("div");
div1.className = 'demo';

var dragging = false;
var lastX
var lastY


/*1.鼠标移动时，获取差值 */
document.body.appendChild(div1);

div1.onmousedown = function (e) {
    dragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
}

/*js无法读取css初始top和left的值 */
document.onmousemove = function (e) {
    if (dragging) {
        var deltaX = e.clientX - lastX;
        var deltaY = e.clientY - lastY;
        var top = parseInt(div1.style.top) || 0;
        var left = parseInt(div1.style.left) || 0;
        div1.style.top = top + deltaY + 'px';
        div1.style.left = left + deltaX + 'px';
        lastX = e.clientX;
        lastY = e.clientY;
    }




}

document.onmouseup = function () {
    dragging = false;
}

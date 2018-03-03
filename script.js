window.onload = init;
function init() {
    let img = document.getElementById('zero');
    img.onclick = showAnswer;
}

function showAnswer() {
    let img = document.getElementById('zero');
    img.src = "img/zero.jpg";
}
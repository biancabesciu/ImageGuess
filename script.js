window.onload = init;
function init() {
    let img = document.getElementsByTagName('img');
    for(let i = 0; i < img.length; i++) {
        img[i].onclick = showAnswer;
    }
}

function showAnswer(eventObj) {
    let img = eventObj.target;
    let name = img.id;
    name = 'img/' + name + '.jpg';
    img.src = name;

    setTimeout(reblur, 2000, img);
}

function reblur(img) {
    let name = img.id;
    name = 'img/' + name + 'blur.jpg';
    img.src = name;
}
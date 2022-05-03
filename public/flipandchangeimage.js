myarray = [];
function changeImage(img) {

    var image = img;
    if (image.src.match("baby-yoda.jpeg")) {
        image.src = "Evil dragon.jpg";
    }
    else {
        image.src = "baby-yoda.jpeg";
    }
}


function flipImage(img) {
    switch (img.dataset.flipped) {
        case 'true': img.style.transform = 'rotateY(0deg)'; img.dataset.flipped = 'false'; break;
        case 'false': img.style.transform = 'rotateY(180deg)'; img.dataset.flipped = 'true'; break;
    }
    setTimeout(() => { changeImage(img) }, "200")

}

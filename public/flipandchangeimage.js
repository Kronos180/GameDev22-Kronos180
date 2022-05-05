myarray = [];
function changeImage(img, mySecondIMG) {
    var image = img;
    if (image.src.match("grey.jpg")) {
        image.src = mySecondIMG;
    }
    else {
        image.src = "grey.jpg";
    }
}


function flipImage(img, mySecondIMG) {
    switch (img.dataset.flipped) {
        case 'true': img.style.transform = 'rotateY(0deg)'; img.dataset.flipped = 'false'; break;
        case 'false': img.style.transform = 'rotateY(180deg)'; img.dataset.flipped = 'true'; break;
    }
    setTimeout(() => { changeImage(img, mySecondIMG) }, "200")
}

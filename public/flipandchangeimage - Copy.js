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
    let query = 
    console.log(document.getElementsByName("img"))
    switch (img.src) {
        case location.origin+'/grey.jpg': img.style.transform = 'rotateY(180deg)'; break;
        default: img.style.transform = 'rotateY(0deg)'; break;
    }
    setTimeout(() => { changeImage(img, mySecondIMG) }, "200")
}

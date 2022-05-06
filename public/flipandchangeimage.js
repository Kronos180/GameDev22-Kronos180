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
    let pair = document.querySelectorAll('#'+img.id)
    let base = location.origin+'/grey.jpg'
    
    if (pair[0].src != pair[1].src || pair[0].src == base || pair[1].src == base) {

        switch (img.src) {
            case base: img.style.transform = 'rotateY(180deg)'; break;
            default: img.style.transform = 'rotateY(0deg)'; break;
        }
        setTimeout(() => { changeImage(img, mySecondIMG) }, "200")
    }
  
}

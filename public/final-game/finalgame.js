myarray = [];
current_level = 1;
function changeImage(img, mySecondIMG) {
    var image = img;
    console.log(img.src)
    if (image.src.match(location.origin + "/images/grey.jpg")) {
        image.src = mySecondIMG;
    }
    else {
        image.src = "../images/grey.jpg";
    }
}

function flipImage(img, mySecondIMG) {
    let pair = document.querySelectorAll('#' + img.id)
    let base = location.origin + '/images/grey.jpg'
    if (pair[0].src != pair[1].src || pair[0].src == base || pair[1].src == base) {

        switch (img.src) {
            case base: img.style.transform = 'rotateY(180deg)'; break;
            default: img.style.transform = 'rotateY(0deg)'; break;
        }
        setTimeout(() => { changeImage(img, mySecondIMG) }, "200")
        let check = document.getElementsByClassName('flip-box-inner')
        let checks = 0
        for (let i = 0; i < check.length; i++) {
            if (check[i].src == base) {
                checks++
            }
        }
        if (checks == 1) {
            setTimeout(() => { alert("You have matched all of the image good job12") }, "2000")
            current_level++
            setTimeout(() => { window.location.replace(location.origin + "/level-" + current_level + ".html") }, "5000")
        }

    }
}

function autoFlipBack(img, mySecondIMG) {
    setTimeout(() => { flipImage(img, mySecondIMG) }, "3000")
}


//document.getElementById('myDiv01').innerHTML = "Hello"

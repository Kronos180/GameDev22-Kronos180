myarray = [];

if (sessionStorage.getItem("mylevel") == null){
    current_level = 1;
} else current_level = sessionStorage.getItem("mylevel")

function changeImage(img, mySecondIMG) {
    var image = img;
    console.log(img.src)
    if (image.src.match(location.origin + "/GameDev22-Kronos180/public/images/grey.jpg")) {
        image.src = mySecondIMG;
    }
    else {
        image.src = "../images/grey.jpg";
    }
}

function flipImage(img, mySecondIMG) {
    let pair = document.querySelectorAll('#' + img.id)
    let base = location.origin + '/GameDev22-Kronos180/public/images/grey.jpg'

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
            console.log(current_level)
            setTimeout(() => { alert("You have matched all of the image good job") }, "1500")
            current_level++
            sessionStorage.setItem("mylevel", current_level)
            setTimeout(() => { window.location.replace(location.origin + "/GameDev22-Kronos180/public/final-game/level-" + current_level + ".html") }, "4000")
        }
    }
}

/*function autoFlipBack(img, mySecondIMG) {
    setTimeout(() => { flipImage(img, mySecondIMG) }, "3000")
}
*/

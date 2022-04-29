img = document.getElementsByTagName("img")
myCheckClickedImage = '';



myChangeImg_Flip = "";


mySwitch = 0;

myarray = [];
function changeImage() {
    var image = document.getElementById(myChangeImg_Flip);
    if (image.src.match("baby-yoda.jpeg")) {
        image.src = "Evil dragon.jpg";
    }
    else {
        image.src = "baby-yoda.jpeg";
    }
}


function flipImage() {
    console.log("Test")
    if ((myCheckClickedImage != myChangeImg_Flip)) {
        mySwitch = 1;
    } //else if { mySwitch = 1; }
    setTimeout(changeImage(), 265)
    console.log()





    

    switch (mySwitch) {

        case 0: document.getElementById(myChangeImg_Flip).style.transform = 'rotateY(180deg)'; mySwitch = 1; break;

        case 1: document.getElementById(myChangeImg_Flip).style.transform = 'rotateY(0deg)'; mySwitch = 0; break;
    }
}


/*for (i = 0; i<5000;i++){
    myarray.push(i)
}
console.log(myarray)*/
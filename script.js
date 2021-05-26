let pressedKeys = [];
let pressedSize;
let releasedSize;
let releasedColor;
let whiteKeys = [ "A", "S", "D", "F", "G", "H", "J" ];
let blackKeys = [ "W", "E", "T", "Y", "U" ];

document.addEventListener("keydown", function(e) {

    //Checking if the pressed key is a letter and if its one of the right ones
    let keyCheck = e.code.substring(0,3) === "Key";
    if(keyCheck == false)
        return;
    
    let key = e.code.substring(3,4);

    if(whiteKeys.includes(key)){
        pressedSize = "110px";
    }
    else if(blackKeys.includes(key)){
        pressedSize = "76px";
    }
    else
        return;

    //dont add the key if its a doublepress
    if(pressedKeys.includes(e.code) == false){
        pressedKeys.push(e.code);
    }

    let audio = new Audio("Music/" + key + ".mp3");
    audio.play();
    document.getElementById(key).style.backgroundColor = "aqua";
    document.getElementById(key).style.height = pressedSize;
});

document.addEventListener("keyup", function(e) {
    if(pressedKeys.includes(e.code)){
        pressedKeys.splice(pressedKeys.indexOf(e.code), 1);
        let key = e.code.substring(3,4);

        if(whiteKeys.includes(key)){
            releasedSize = "120px";
            releasedColor = "white";
        }
        else{
            releasedSize = "80px";
            releasedColor = "black";
        }

        document.getElementById(key).style.backgroundColor = releasedColor;
        document.getElementById(key).style.height = releasedSize;
    }
});
function keyPress(letter){
    switch (letter) {
        case "w": var audio=new Audio("sounds/tom-1.mp3");
                  audio.play();
                  break;
        case "a": var audio=new Audio("sounds/tom-2.mp3");
                  audio.play();
                  break;
        case "s": var audio=new Audio("sounds/tom-3.mp3");
                  audio.play();
                  break;
        case "d": var audio=new Audio("sounds/tom-4.mp3");
                  audio.play();
                  break;
        case "j": var audio=new Audio("sounds/snare.mp3");
                  audio.play();
                  break;
        case "k": var audio=new Audio("sounds/crash.mp3");
                  audio.play();
                  break;
        case "l": var audio=new Audio("sounds/kick-bass.mp3");
                  audio.play();
                  break;      
        default:  console.log("Wrong choice");  
    }
}

function buttonAnimation(currentButton){
    var currBtn=document.querySelector("."+currentButton);//access the class of the current button pressed
    //Adding the .pressed class to the the existing classList of the current Button
    currBtn.classList.add("pressed");
    setTimeout(function(){
        currBtn.classList.remove("pressed");//This anonymous function removes the class pressed from the current button after the timeout of 1000 ms
    },300);
}

//Detecting the button press
var num=document.querySelectorAll(".drum").length;//calculate no. of elements with class="drum"
for(var i=0;i<num;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        // the 'this' element erturns the attributes of that button ehich got clicked
        keyPress(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

//Detecting the Keyboard key press
document.addEventListener("keypress",function(event){
    //event is any parameter that detects the key press
    keyPress(event.key);
    buttonAnimation(event.key);
});

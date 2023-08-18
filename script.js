// detecting button press

for(var i=0;i<document.querySelectorAll(".drum").length;i++)

{
document.querySelectorAll("button")[i].addEventListener("click",function()
{


    // // alert("i got clicked");
    // var mysound=new Audio("sounds/tom-1.mp3");
    // mysound.play();
    // this.style.color="blue";
   
    var buttoninnerHTML=this.innerHTML;
    makesound(buttoninnerHTML)
    buttonAnimation(buttoninnerHTML)
});
}

// detecting key board press


document.addEventListener("keypress",function(event)
{
    // alert("key is pressed");
    // console.log(Event);
   
    makesound(event.key)
    // this.style.color="blue";//not working here 
    buttonAnimation(event.key)
});

function makesound(key)
{
    switch(key)
    {
        case "w":
            var mysound1=new Audio("sounds/tom-1.mp3");
              mysound1.play();
              break;
        case "a":
            var mysound2=new Audio("sounds/tom-2.mp3");
            mysound2.play();
                break;    
         case "s":
              var mysound3=new Audio("sounds/tom-3.mp3");
             mysound3.play();
                  break;      
        case "d":
                var mysound4=new Audio("sounds/tom-4.mp3");
                    mysound4.play();
                   break;      
           case "j":
                  var mysound5=new Audio("sounds/crash.mp3");
                  mysound5.play();
                     break;     
         case "k":
                var mysound6=new Audio("sounds/snare.mp3");
                 mysound6.play();
              break;   
        case "l":
             var mysound7=new Audio("sounds/kick-bass.mp3");
              mysound7.play();
                break;                       
        default:
            console.log(key);
}
}
function buttonAnimation(currentkey)
{
    
    var activebutton=document.querySelector("."+currentkey);
     
    activebutton.classList.add("pressed");
    setTimeout(function(){

        activebutton.classList.remove("pressed")
    },100);
}
var audio  = document.createElement('audio');
document.body.appendChild(audio);
audio.src = "caraudio.mp3" 

document.body.addEventListener("mousedown",function(){
    audio.play();
    audio.loop();
});

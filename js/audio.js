const bgMusic = document.getElementById("bg-music");

bgMusic.volume = 0.6;

function aktifkanAudio(){
    if(bgMusic.paused){
        bgMusic.play().catch(()=>{});
    }
}

window.addEventListener("click", aktifkanAudio);
window.addEventListener("touchstart", aktifkanAudio);

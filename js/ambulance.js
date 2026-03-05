document.addEventListener("DOMContentLoaded",function(){

const train=document.getElementById("ambulance-train")

let started=false

function jalanAmbulance(){

train.style.transition="none"
train.style.left="-900px"

setTimeout(function(){

train.style.transition="left 8s linear"
train.style.left="120vw"

},100)

}

function cekScroll(){

if(started) return

const section=document
.getElementById("ambulance-section")
.getBoundingClientRect()

if(section.top < window.innerHeight-100){

started=true

jalanAmbulance()

setInterval(jalanAmbulance,30000)

}

}

window.addEventListener("scroll",cekScroll)

})

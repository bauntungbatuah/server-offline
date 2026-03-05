document.addEventListener("DOMContentLoaded", function(){

let ambulanceShown = false

function munculAmbulance(){

const beritaSection = document.getElementById("section-berita")

if(!beritaSection || ambulanceShown) return

const posisi = beritaSection.getBoundingClientRect().top
const tinggiLayar = window.innerHeight

if(posisi < tinggiLayar){

ambulanceShown = true

const ambulance = document.createElement("div")

ambulance.id = "ambulance"

ambulance.innerHTML = `
<img src="assets/img/ambulance.png" style="
width:120px;
position:fixed;
bottom:40px;
left:-150px;
z-index:9999;
transition: transform 6s linear;
">
<div id="pesan-ambulance"
style="
position:fixed;
bottom:120px;
left:20px;
background:white;
padding:10px 16px;
border-radius:20px;
box-shadow:0 10px 25px rgba(0,0,0,0.2);
font-size:13px;
font-weight:bold;
z-index:9999;
opacity:0;
transition:opacity 1s;
">

Ambulans lewat 🚑  
Berkat doa orang sekampung, kawa tarus.  
Mun kada aur, hubungi supirnya 🙏

</div>
`

document.body.appendChild(ambulance)

const mobil = ambulance.querySelector("img")
const pesan = document.getElementById("pesan-ambulance")

setTimeout(()=>{

mobil.style.transform = "translateX(120vw)"
pesan.style.opacity = "1"

},200)

setTimeout(()=>{

pesan.style.opacity = "0"

},5000)

}

}

window.addEventListener("scroll", munculAmbulance)

})
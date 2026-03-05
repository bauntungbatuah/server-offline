document.addEventListener("DOMContentLoaded",function(){

function updateJam(){

const sekarang=new Date()

const jam=sekarang.getHours().toString().padStart(2,"0")
const menit=sekarang.getMinutes().toString().padStart(2,"0")
const detik=sekarang.getSeconds().toString().padStart(2,"0")

const waktu=jam+":"+menit+":"+detik

const el=document.getElementById("jam-realtime")

if(el){
el.innerText=waktu+" WITA"
}

}

setInterval(updateJam,1000)
updateJam()

})

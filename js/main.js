// tunggu sampai halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function(){

// fungsi untuk memuat komponen HTML
function loadComponent(targetId, filePath){

fetch(filePath)
.then(response => response.text())
.then(data => {

const target = document.getElementById(targetId)

if(target){
target.innerHTML = data
}

})
.catch(error => {

console.log("Gagal memuat komponen:", filePath)

})

}


// fungsi jam realtime
function updateJam(){

const sekarang = new Date()

const jam = sekarang.getHours().toString().padStart(2,"0")
const menit = sekarang.getMinutes().toString().padStart(2,"0")
const detik = sekarang.getSeconds().toString().padStart(2,"0")

const waktu = jam + ":" + menit + ":" + detik

const jamElement = document.getElementById("jam-realtime")

if(jamElement){
jamElement.innerText = waktu + " WITA"
}

}

// jalankan jam
setInterval(updateJam,1000)
updateJam()

// panggil semua komponen portal

loadComponent("status-server", "components/status-server.html")

loadComponent("cuaca", "components/cuaca.html")

loadComponent("cctv", "components/cctv.html")

loadComponent("peta", "components/peta.html")

loadComponent("banner", "components/banner.html")

loadComponent("berita", "components/berita.html")

})

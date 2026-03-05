const SERVER_URL = "https://desa.banama.my.id"


async function cekServerDesa(){

try{

const controller = new AbortController()
const timeout = setTimeout(()=>controller.abort(),3000)

await fetch(SERVER_URL,{
method:"GET",
mode:"no-cors",
signal:controller.signal
})

clearTimeout(timeout)

return true

}catch(e){

return false

}

}



async function bukaSID(e){

e.preventDefault()

const online = await cekServerDesa()

if(online){

const menu = document.getElementById("menu-sid")

menu.classList.toggle("hidden")

return

}


/* jika server tidak aktif */

const sekarang = new Date()
const hari = sekarang.getDay()
const jam = sekarang.getHours()
const menit = sekarang.getMinutes()

const waktu = jam + menit/60

const jamKerja =
(hari>=1 && hari<=4 && waktu>=8 && waktu<=15.5) ||
(hari==5 && waktu>=8 && waktu<=11)


if(!jamKerja){

document.getElementById("sapaan").innerText =
"Server Sedang Istirahat"

document.getElementById("pesan-utama").innerText =
"Layanan desa saat ini berada di luar jam operasional."

document.getElementById("area-countdown").classList.remove("hidden")

}else{

document.getElementById("sapaan").innerText =
"Mohon Maaf"

document.getElementById("pesan-utama").innerText =
"Server desa sedang mengalami gangguan koneksi atau listrik."

}

}



function bukaMenuLogin(){

const menu = document.getElementById("menu-login")

menu.classList.toggle("hidden")

}

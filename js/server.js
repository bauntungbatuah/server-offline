const SERVER_URL = "https://desa.banama.my.id";

/* CEK STATUS SERVER */

async function cekServerDesa(){

const lamp = document.getElementById("server-lamp");
const text = document.getElementById("server-text");

try{

const controller = new AbortController();
const timeout = setTimeout(()=>controller.abort(),3000);

await fetch(SERVER_URL,{
method:"GET",
mode:"no-cors",
signal:controller.signal
});

clearTimeout(timeout);

if(lamp){
lamp.classList.remove("bg-red-500","bg-gray-400");
lamp.classList.add("bg-green-500");
}

if(text){
text.innerText = "Server Online";
}

return true;

}catch(e){

if(lamp){
lamp.classList.remove("bg-green-500","bg-gray-400");
lamp.classList.add("bg-red-500");
}

if(text){
text.innerText = "Server Offline";
}

return false;

}

}


/* TOMBOL MASUK SISTEM DESA */

async function bukaSID(e){

e.preventDefault();

const online = await cekServerDesa();

if(online){

window.location.href = SERVER_URL;
return;

}

const sekarang = new Date();
const hari = sekarang.getDay();
const jam = sekarang.getHours();
const menit = sekarang.getMinutes();

const waktu = jam + menit/60;

const jamKerja =
(hari>=1 && hari<=4 && waktu>=8 && waktu<=15.5) ||
(hari==5 && waktu>=8 && waktu<=11);

if(!jamKerja){

document.getElementById("sapaan").innerText =
"Server Sedang Istirahat";

document.getElementById("pesan-utama").innerText =
"Layanan desa saat ini berada di luar jam operasional.";

document.getElementById("area-countdown").classList.remove("hidden");

}else{

document.getElementById("sapaan").innerText =
"Mohon Maaf";

document.getElementById("pesan-utama").innerText =
"Server desa sedang mengalami gangguan koneksi atau listrik.";

}

}


/* JALANKAN SAAT HALAMAN DIBUKA */

document.addEventListener("DOMContentLoaded",function(){

cekServerDesa();

});


/* CEK SERVER SETIAP 30 DETIK */

setInterval(cekServerDesa,30000);

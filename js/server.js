async function cekServerDesa(){

const url = "https://desa.banama.my.id"

const lamp = document.getElementById("server-lamp")
const text = document.getElementById("server-text")

try{

const controller = new AbortController()

const timeout = setTimeout(()=>controller.abort(),3000)

await fetch(url,{
method:"GET",
mode:"no-cors",
signal:controller.signal
})

clearTimeout(timeout)

if(lamp){

lamp.classList.remove("bg-red-500","bg-gray-400")

lamp.classList.add("bg-green-500")

}

if(text){

text.innerText = "Server Online"

}

}catch(e){

if(lamp){

lamp.classList.remove("bg-green-500","bg-gray-400")

lamp.classList.add("bg-red-500")

}

if(text){

text.innerText = "Server Offline"

}

}

}


// jalankan saat halaman dibuka

document.addEventListener("DOMContentLoaded",function(){

cekServerDesa()

})

// cek ulang setiap 30 detik

setInterval(cekServerDesa,30000)

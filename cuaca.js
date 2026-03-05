async function ambilCuaca() {

try {

const url =
"https://api.open-meteo.com/v1/forecast?latitude=-3.3&longitude=114.6&current_weather=true"

const response = await fetch(url)

const data = await response.json()

const suhu = data.current_weather.temperature
const kodeCuaca = data.current_weather.weathercode

document.getElementById("cuaca-suhu").innerText = suhu + "°C"

let deskripsi = "Cuaca"
let icon = "☁️"

if(kodeCuaca == 0){
deskripsi = "Cerah"
icon = "☀️"
}

else if(kodeCuaca <= 3){
deskripsi = "Berawan"
icon = "☁️"
}

else if(kodeCuaca <= 61){
deskripsi = "Hujan Ringan"
icon = "🌧"
}

else if(kodeCuaca <= 95){
deskripsi = "Badai"
icon = "⛈"
}

document.getElementById("cuaca-deskripsi").innerText = deskripsi
document.getElementById("cuaca-icon").innerText = icon

}catch(e){

document.getElementById("cuaca-deskripsi").innerText =
"Tidak dapat mengambil data cuaca"

}

}


// jalankan saat halaman dimuat

document.addEventListener("DOMContentLoaded", function(){

ambilCuaca()

})


// update setiap 10 menit

setInterval(ambilCuaca,600000)
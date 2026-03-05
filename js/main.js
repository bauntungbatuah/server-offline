// fungsi untuk memuat komponen HTML

function loadComponent(targetId, filePath) {

fetch(filePath)
.then(response => response.text())
.then(data => {

document.getElementById(targetId).innerHTML = data

})

.catch(error => {

console.log("Gagal memuat komponen:", filePath)

})

}


// panggil semua komponen portal

loadComponent("status-server", "components/status-server.html")

loadComponent("cuaca", "components/cuaca.html")

loadComponent("cctv", "components/cctv.html")

loadComponent("peta", "components/peta.html")

loadComponent("banner", "components/banner.html")


loadComponent("berita", "components/berita.html")

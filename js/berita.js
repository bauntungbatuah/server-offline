// cek berita dari OpenSID

async function ambilBeritaDesa() {

try {

const response = await fetch("https://desa.banama.my.id/artikel", {
method: "GET",
mode: "no-cors"
})

// jika berhasil diakses tampilkan section berita

document.getElementById("section-berita").classList.remove("hidden")

document.getElementById("berita-desa").innerHTML = `

<div class="berita-item">

<p class="font-bold">
Berita terbaru tersedia di Sistem Informasi Desa
</p>

<a href="https://desa.banama.my.id/artikel"
target="_blank"
class="text-amber-600 font-bold">

Buka Berita Desa →

</a>

</div>

`

} catch (error) {

// jika gagal maka berita tidak ditampilkan

console.log("OpenSID tidak tersedia")

}

}


// jalankan saat halaman selesai dimuat

document.addEventListener("DOMContentLoaded", function(){

ambilBeritaDesa()

})

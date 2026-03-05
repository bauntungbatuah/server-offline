// aktifkan animasi scroll

document.addEventListener("DOMContentLoaded", function(){

if(typeof AOS !== "undefined"){

AOS.init({

duration: 1000,
once: true,
offset: 120,
easing: "ease-out-cubic"

})

}

})
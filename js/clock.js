guest = prompt("Lütfen adınızı giriniz");
guestName = document.querySelector("#myName");
clock = document.querySelector("#myClock");

guestName.innerHTML = `${guest}`;
function clocks() {
    let tarih = new Date();
    let saat = tarih.getHours();
    let dakika = tarih.getMinutes();
    let saniye = tarih.getSeconds();
    let gun = tarih.getDay();
    let gunler = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
    clock.innerHTML = `${saat}:${dakika}:${saniye} ${gunler[gun]}`;
}
setInterval(clocks,1000);

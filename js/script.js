// Toogle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan hamburger menu

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// script.js

function kirimPesan() {
  console.log("Tombol diklik");
  // Mengambil nilai dari setiap elemen formulir
  var nama = document.getElementById("nama").value;
  var alamat = document.getElementById("alamat").value;
  var noHp = document.getElementById("noHp").value;
  var pesan = document.getElementById("pesan").value;

  // Membuat pesan WhatsApp dengan menggabungkan data formulir
  var pesanWhatsApp =
    "Halo, saya ingin memesan telur gulung dengan detail berikut:%0a";
  pesanWhatsApp += "Nama: " + nama + "%0a";
  pesanWhatsApp += "Alamat: " + alamat + "%0a";
  pesanWhatsApp += "No Hp: " + noHp + "%0a";
  pesanWhatsApp += "Pesan: " + pesan;

  // Mengarahkan pengguna ke tautan WhatsApp dengan pesan yang dihasilkan
  console.log(
    "URL WhatsApp: ",
    "https://wa.me/6281938885434?text=" + encodeURIComponent(pesanWhatsApp)
  );
  window.location.href =
    "https://wa.me/6281938885434?text=" + encodeURIComponent(pesanWhatsApp);
}

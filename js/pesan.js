// script.js

function kirimPesan() {
  // Mengambil nilai dari setiap elemen formulir
  var nama = document.getElementById("nama").value;
  var alamatEmail = document.getElementById("alamatEmail").value;
  var noHp = document.getElementById("noHp").value;
  var pesan = document.getElementById("pesan").value;

  // Membuat pesan WhatsApp dengan menggabungkan data formulir
  var pesanWhatsApp =
    "Halo, saya ingin memesan telur gulung dengan detail berikut:%0a";
  pesanWhatsApp += "Nama: " + nama + "%0a";
  pesanWhatsApp += "Alamat Email: " + alamatEmail + "%0a";
  pesanWhatsApp += "No Hp: " + noHp + "%0a";
  pesanWhatsApp += "Pesan: " + pesan;

  // Mengarahkan pengguna ke tautan WhatsApp dengan pesan yang dihasilkan
  window.location.href =
    "https://wa.me/628198885434?text=" + encodeURIComponent(pesanWhatsApp);
}

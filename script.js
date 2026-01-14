// 1. Data Default (Awal)
const dataAwal = [
    { 
        id: "batik01", 
        nama: "Batik Navy", 
        harga: 345000, 
        images: ["img/batik-navy.jpg"], 
        desc: "Motif batik pada kemeja STYO Collection tersebut merupakan kombinasi antara motif Parang yang legendaris dengan sentuhan ornamen floral/lung-lungan modern.",
        pemilik: "Design : Sulis"
    }
];

// 2. Ambil data dari LocalStorage jika ada, jika tidak pakai dataAwal
let db_produk = JSON.parse(localStorage.getItem('my_db_produk')) || dataAwal;

const form = document.getElementById('formProduk');
const output = document.getElementById('jsonOutput');

// Fungsi untuk menampilkan data di layar
function updateDisplay() {
    output.textContent = JSON.stringify(db_produk, null, 4);
}

// 3. Logika Simpan Data
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Ambil nilai dari input
    const newProduk = {
        id: document.getElementById('id').value,
        nama: document.getElementById('nama').value,
        harga: parseInt(document.getElementById('harga').value),
        images: [document.getElementById('images').value],
        desc: document.getElementById('desc').value,
        pemilik: document.getElementById('pemilik').value
    };

    // Masukkan ke dalam array
    db_produk.push(newProduk);

    // Simpan ke LocalStorage agar tidak hilang saat refresh
    localStorage.setItem('my_db_produk', JSON.stringify(db_produk));

    // Reset form dan update tampilan
    form.reset();
    updateDisplay();
    alert("Data berhasil ditambahkan!");
});

// Jalankan tampilan awal
updateDisplay();

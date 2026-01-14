const { exec } = require('child_process'); // Tambahkan di baris paling atas

// ... (kode multer dan lainnya tetap sama) ...

app.post('/tambah-produk', upload.single('foto'), (req, res) => {
    // ... (kode pengambilan dataBaru tetap sama) ...

    fs.writeFile(path.join(__dirname, 'db.js'), isiFile, (err) => {
        if (err) return res.status(500).send("Gagal menulis file");

        // --- MULAI AUTO PUSH KE GITHUB ---
        const perintahGit = `
            git add db.js img/ && 
            git commit -m "Update database: ${dataBaru.nama}" && 
            git push origin main
        `;

        exec(perintahGit, (error, stdout, stderr) => {
            if (error) {
                console.error(`Gagal Push: ${error.message}`);
                return res.send("Data simpan lokal, tapi gagal push ke GitHub.");
            }
            console.log("Berhasil Update ke GitHub!");
            res.send("Data berhasil disimpan dan GitHub terupdate!");
        });
        // --- SELESAI AUTO PUSH ---
    });
});

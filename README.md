# ✦ Mail — Bespoke Edition

Di era di mana aplikasi *web* berlomba-lomba menjadi kompleks dan rakus memori, *client* ini mengambil jalan berbeda: *Quiet luxury*. 

Sebuah mahakarya efisiensi yang diukir presisi hanya dalam satu buah file HTML. Tidak ada *node_modules* yang berantakan, tidak ada *framework* yang membebani sistem. Hanya murni logika, estetika minimalis, dan fungsionalitas kelas atas. Diciptakan khusus untuk mereka yang menghargai kecepatan, privasi, dan seni dalam menulis kode.

## 🏛️ Filosofi & Kapabilitas
* **Zero-Dependency Architecture:** Dibangun murni menggunakan Vanilla JavaScript, CSS3, dan HTML5. Sebuah antitesis dari ekosistem *web modern* yang seringkali *over-engineered*.
* **Understated Interface:** Desain *mobile-first* yang elegan dan *fluid*. Dilengkapi dengan *micro-interactions* dan *skeleton loading* yang memberikan pengalaman visual premium tanpa distraksi.
* **State-of-the-Art Security:** Otentikasi didukung penuh oleh infrastruktur Google Identity Services (`gsi/client`). Tidak ada intervensi *backend* pihak ketiga; data Anda mengalir langsung, terenkripsi, dari *server* Google ke layar Anda.
* **Executive Control:** Kendali penuh atas kotak masuk Anda—mulai dari membaca, manajemen arsip, hingga mengirim balasan dengan *encoding* Base64 murni.

## ⚙️ Integrasi & Deployment
Sistem ini dirancang sedemikian rupa agar dapat langsung di-*deploy* ke ekosistem Vercel dalam hitungan detik, bahkan jika Anda hanya mengeksekusinya melalui *code editor* genggam.

Untuk mengadopsi sistem ini ke dalam infrastruktur privat Anda:
1. Amankan **Google OAuth 2.0 Client ID** melalui otorisasi Google Cloud Console.
2. Daftarkan dominium Vercel Anda pada **Authorized JavaScript origins** guna mencegah anomali *redirect_uri_mismatch*.
3. Tanamkan kredensial eksklusif Anda pada pusat kontrol skrip:
   ```javascript
   const CLIENT_ID = 'YOUR_EXCLUSIVE_CLIENT_ID.apps.googleusercontent.com';
